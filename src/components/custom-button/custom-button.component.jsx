import React from 'react'
import propTypes from 'prop-types'

import './custom-button.styles.scss'

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)

CustomButton.propTypes = {
  children: propTypes.any,
  isGoogleSignIn: propTypes.bool,
  inverted: propTypes.bool,
}

export default CustomButton
