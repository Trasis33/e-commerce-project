import React from 'react'
import propTypes from 'prop-types'

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './form-input.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer
      onChange={handleChange}
      {...otherProps}
    ></FormInputContainer>
    {label ? (
      <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
)

FormInput.propTypes = {
  handleChange: propTypes.func,
  label: propTypes.string,
}

export default FormInput
