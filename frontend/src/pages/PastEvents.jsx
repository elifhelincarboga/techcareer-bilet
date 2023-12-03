import Api from '../store/api/axios-auth'
import { useDispatch, useSelector } from 'react-redux'
import { setEvents } from '../store/modules/event'
import { useEffect } from 'react'
import Events from '../components/Events'

function PastEvents() {
  const dispatch = useDispatch()
  const events = useSelector((state) => state.event.events)

  const filter = {
    startDate: new Date('01/01/2018').toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  }

  useEffect(() => {
    Api().post('/events/filter', { ...filter }).then(response => {
      dispatch(setEvents(response.data))
    }).catch(error => {
      console.error('Error fetching data:', error)
    }) 
  }, [])


  return (
    <>
    <div className='container'>
      <Events data={events}></Events>
    </div>
    </>
  )
}

export default PastEvents