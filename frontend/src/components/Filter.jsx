import Select from './ui/Select'
import DatePicker from './ui/DatePicker'
import CitiesData from '../data/cities'
import { useDispatch, useSelector } from 'react-redux'
import { setEvents } from '../store/modules/event'
import Api from '../store/api/axios-auth'
import * as Yup from 'yup'
import { setLoading } from '../store/modules/loading'
import { useEffect } from 'react'

function Filter() {
  const filterOptions = [
    {
      type: 'singleSelect',
      url: '/categories',
      label: 'category',
      customClass: '',
      model: 'category',
      default: ''
    },
    {
      type: 'singleSelect',
      label: 'city',
      customClass: '',
      model: 'city',
      data: CitiesData,
      default: ''
    },
    {
      type: 'datePicker',
      model: 'startDate',
      label: 'start date',
      default: new Date().toISOString().split('T')[0]
    },
    {
      type: 'datePicker',
      model: 'endDate',
      label: 'end date',
      default: new Date('12/31/2023').toISOString().split('T')[0]
    }
  ]

  const filterValidationSchema = Yup.object().shape({
    startDate: Yup.date(),
    endDate: Yup.date()
      .min(Yup.ref('startDate'), 'End date must be after or equal to start date'),
    category: Yup.string().nullable(),
    city: Yup.string().nullable(),
  })

  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filter.filters)


  const handleFilterClick = () => {
    filterValidationSchema.validate(filters)
      .then(validData => {
        dispatch(setLoading(true))
        Api().post('/events/filter', {...validData}).then(response => {
          dispatch(setEvents(response.data))
          dispatch(setLoading(false))
        }).catch(error => {
          console.error('Error fetching data:', error)
          dispatch(setLoading(false))
        })    
      })
      .catch(validationError => {
        console.error('Validation error:', validationError.errors)
      })
  }

  useEffect(() => {
    handleFilterClick()
  }, [filters])

  return (
    <>
      <div className='row mb-5 d-flex align-items-center'>
        {
          filterOptions.map((filter, index) => {
            if (filter.type === 'singleSelect') {
              return (
                <div key={index} className='col'>
                  <Select key={index} url={filter.url} label={filter.label} customClass={filter.customClass} model={filter.model} data={filter.data} default={filter.default}></Select>
                </div>
              )
            } else if (filter.type === 'datePicker') {
              return (
                <div key={index} className='col'>
                  <DatePicker key={index} label={filter.label} model={filter.model} default={filter.default}></DatePicker>
                </div>
              )
            }
          })
        }
        <div className='col-1'>
          <button type="button" className="btn btn-lg btn-primary" onClick={handleFilterClick}>Filter</button>
        </div>
      </div>
    </>
  )
}

export default Filter
