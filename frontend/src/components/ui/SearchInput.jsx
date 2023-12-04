import PropTypes from 'prop-types'
import { useState } from 'react'

function SearchInput(props) {
  const [keyword, setKeyword] = useState('');

  const onChangeHandler = (event) => {
    event.preventDefault()
    setKeyword(event.target.value)
  }

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder={props.placeholder}
          aria-label={props.label}
          aria-describedby="basic-addon2"
          onChange={onChangeHandler}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => props.clickHandler(keyword)}
          >Button</button>
        </div>
      </div>
    </>
  )
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  clickHandler: PropTypes.func
}

export default SearchInput
