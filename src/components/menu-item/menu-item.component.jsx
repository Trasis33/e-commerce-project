import React from 'react'
import propTypes from 'prop-types'

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    {/* Separate div because of image zoom effect to stay inside container */}
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem

MenuItem.propTypes = {
  title: propTypes.string,
  imageUrl: propTypes.string,
  size: propTypes.string,
}
