import React from 'react'
import Productpage from './Productpage'
import Productsidebar from './Productsidebar'

const Productsec = () => {
  return (
    <div className="product-wrapper">
        <Productsidebar />
        <Productpage />
    </div>
  )
}

export default Productsec