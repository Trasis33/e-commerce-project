import React from 'react'
import propTypes from 'prop-types'

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    ></input>
    {label ? (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
)

FormInput.propTypes = {
  handleChange: propTypes.func,
  label: propTypes.string,
}

export default FormInput
