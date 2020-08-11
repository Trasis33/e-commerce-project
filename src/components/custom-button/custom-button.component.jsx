import React from 'react'
import propTypes from 'prop-types'

import { CustomButtonContainer } from './custom-button.styles'

const CustomButton = ({ children, ...props }) => (
  // eslint-disable-next-line react/button-has-type
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
)

CustomButton.propTypes = {
  children: propTypes.any,
  isGoogleSignIn: propTypes.bool,
  inverted: propTypes.bool,
}

export default CustomButton
