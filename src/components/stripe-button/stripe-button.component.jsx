import React from 'react'
import propTypes from 'prop-types'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51HBN4MFYEqhpcDlxWtRMWjCbzLXLhBwGpmvcu15rF6iGHUSkuBkJ372uSYruNZS59IPo6OCf7uxqCQ04RzgcoWTU005cg38vi7'

  const onToken = (token) => {
    console.log(token)
    alert('Payment successful')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Company ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

StripeCheckoutButton.propTypes = {
  price: propTypes.number,
}

export default StripeCheckoutButton
