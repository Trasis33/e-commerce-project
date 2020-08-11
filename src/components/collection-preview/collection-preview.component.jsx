import React from 'react'
import propTypes from 'prop-types'

import {
  CollectionPreviewContainer,
  PreviewContainer,
  Title,
} from './collection-preview.styles'

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <Title>{title.toUpperCase()}</Title>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
)

CollectionPreview.propTypes = {
  title: propTypes.string,
  items: propTypes.array,
}

export default CollectionPreview
