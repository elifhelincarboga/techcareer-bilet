import Card from './ui/Card'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function Events(props) {
  return (
    <>
      <div className='row mt-5'>
        {
          props.data.map((event, index) => {
            return (
              <div key={index} className='col-3 mb-4'>
                <Link to={`/event/${event.id}`}>
                  <Card data={event}></Card>
                </Link>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

Events.propTypes = {
  data: PropTypes.array
}

export default Events
