import React from 'react'
import propTypes from 'prop-types'

import CustomButton from '../custom-button/custom-button.component'

import './collection-item.styles.scss'

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted>Add to cart</CustomButton>
  </div>
)

CollectionItem.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  price: propTypes.number,
  imageUrl: propTypes.string,
}

export default CollectionItem
