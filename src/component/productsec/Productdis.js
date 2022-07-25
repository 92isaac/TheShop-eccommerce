import React from 'react'
import '../assests/styles/productdis.css'
import { useNavigate } from 'react-router-dom'

const Productdis = ({img, title, price, rating, description, id}) => {
    const navigation = useNavigate()
  return (
    <div className="product-dis">
        <div className="product-image">
            <img src={img} alt="" />
        </div>
        <div className="product-details">
            <h3>{title}</h3>
            <div className='span'><span className='price'>€{price}</span><span className='rate'>{rating}</span></div>
            <p>{description}</p>
            <div>@@@@</div>
        </div>
    </div>
  )
}

export default Productdis