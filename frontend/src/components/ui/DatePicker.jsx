import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../store/modules/filter'
import PropTypes from 'prop-types'

function DatePicker(props) {
  const [date, setDate] = useState('')

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setDate(event.target.value)
    dispatch(setFilter([props.model, event.target.value]))
  }

  const setDefault = () => {
    // Get the current date in the format 'YYYY-MM-DD'
    const currentDate = new Date().toISOString().split('T')[0]
    setDate(currentDate)
    dispatch(setFilter([props.model, currentDate]))
  }

  useEffect(() => {
    setDefault()
	}, [])

  return (
    <>
      <div className='form-floating'>
        <input type="date" className="form-control" value={date} onChange={handleChange} />
        <label htmlFor={props.model}>{props.label}</label>
      </div>
    </>
  )
}

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  model: PropTypes.string.isRequired,
}

export default DatePicker
