import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/tr'

function Ticket(props) {

  const formatDate = (date) => {
    const formattedDate = moment.utc(date).locale('tr').format('DD MMMM ddd [/] HH:mm')
    return formattedDate
  }

  return (
    <div className='ticket me-5'>
      <h2>Bilet Satın Alınız</h2>
      {
        props.seatingCategories.map((seating, index) => {
          return (
            <div key={index} className='d-flex my-3'>
              <div className='ticket__left'>
                <div className='ticket--date'>{formatDate(props.date)}</div>
                <div>{props.locationName}</div>
                <div className='ticket--type'>{seating.name}</div>
              </div>
              <div className='ticket__right'>
                {
                  seating.price ? (
                    <span className='price'>{seating.price}<small>.00 TL</small></span>
                  ) : (
                    'Bedava'
                  )
                }
              </div>
              <div className='ticket__bottom'>
                <span>
                  SATIN AL
                </span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

Ticket.propTypes = {
  date: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  seatingCategories: PropTypes.array
}

export default Ticket
