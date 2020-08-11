import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors'

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './checkout.styles'

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${total}</TotalContainer>
    <WarningContainer>
      * Use the following test credit cart number for payments *
      <br />
      4242 4242 4242 4242 - Exp: any future date, CVC: any three numbers
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
)

CheckoutPage.propTypes = {
  cartItems: propTypes.array,
  total: propTypes.number,
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)
