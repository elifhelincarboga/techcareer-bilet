import Filter from '../components/Filter'
import Events from '../components/Events'
import { useSelector } from 'react-redux'

function Home() {
  const events = useSelector((state) => state.event.events)

  return (
    <>
      <div>Home</div>
      <Filter></Filter>
      <Events data={events}></Events>
    </>
  )
}

export default Home