import Card from './ui/Card'
import PropTypes from 'prop-types'

function Events(props) {

  return (
    <>
      <div className='row'>
        {
          props.data.map((event, index) => {
            return (
              <div key={index} className='col-3'>
                <Card data={event}></Card>
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
