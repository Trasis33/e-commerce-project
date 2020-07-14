import React from 'react'
import propTypes from 'prop-types'

import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  </div>
)

CollectionPreview.propTypes = {
  title: propTypes.string,
  items: propTypes.array,
}

export default CollectionPreview
