import PropTypes from 'prop-types'

function Description(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <div>
        <h3>Etkinlik Detayı</h3>
        <p>{props.description}</p>
      </div>
    </>
  )
}

Description.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Description
