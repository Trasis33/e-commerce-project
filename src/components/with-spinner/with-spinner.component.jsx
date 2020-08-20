import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

const WithSpinner = (WrappedComponent) => {
  // eslint-disable-next-line react/prop-types
  const Spinner = ({ isLoading, ...otherProps }) =>
    isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    )
  return Spinner
}

export default WithSpinner
