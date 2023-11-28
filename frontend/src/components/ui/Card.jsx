import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/tr'

function Card(props) {

  const formatDate = (dateStr) => {
    return moment(dateStr).format('llll')
  }

  return (
    <>
      <div className="card" style={{width: "18rem"}}>
        <img src={props.data.profileImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.data.locationName}</li>
          <li className="list-group-item">{formatDate(props.data.date)}</li>
        </ul>
        <div className="card-body">
          <h5>{props.data.minPrice} TL</h5>
        </div>
      </div>
    </>
  )
}

Card.propTypes = {
  data: PropTypes.object
}

export default Card
