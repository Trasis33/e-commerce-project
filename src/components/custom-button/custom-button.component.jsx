import React from 'react'
import propTypes from 'prop-types'

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)

CustomButton.propTypes = {
  children: propTypes.any,
  isGoogleSignIn: propTypes.bool,
}

export default CustomButton
