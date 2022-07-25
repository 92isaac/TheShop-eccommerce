import React from 'react'
import productdict from './productdict'
import Productdis from './Productdis'

const Productpage = () => {
  return (
    <div>
        {productdict.map((product, idx)=> (<Productdis 
            key={product.img}
            img={product.img}
            title={product.title}
            price={product.price}
            rating={product.rate}
            description={product.description}
        />))}
    </div>
  )
}

export default Productpage