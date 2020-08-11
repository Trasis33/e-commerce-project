import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions'

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton,
} from './collection-item.styles'

// eslint-disable-next-line no-shadow
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  )
}

CollectionItem.propTypes = {
  item: propTypes.object,
  name: propTypes.string,
  price: propTypes.number,
  imageUrl: propTypes.string,
  addItem: propTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
