import React from 'react'
import propTypes from 'prop-types'

import './custom-button.styles.scss'

const CustomButton = ({ children, ...otherProps }) => (
  // eslint-disable-next-line react/button-has-type
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
)

CustomButton.propTypes = {
  children: propTypes.any,
}

export default CustomButton
