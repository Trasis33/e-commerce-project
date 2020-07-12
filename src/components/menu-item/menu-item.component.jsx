import React from 'react'

import './menu-item.styles.scss'

// eslint-disable-next-line react/prop-types
const MenuItem = ({ title }) => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem
