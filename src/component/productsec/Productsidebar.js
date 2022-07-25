import React from "react";
import '../assests/styles/productsidebar.css'

const Productsidebar = () => {
  return (
    <div className="product-sidebar" style={{position: '', overflow: 'hidden', width: '180px'}}>
      <div className="categories">
        <label>Categories</label>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> Pretashop
          </label>
        </div>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> Magento
          </label>
        </div>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> Bigcommerce
          </label>
        </div>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> osCommerce
          </label>
        </div>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> 3dcart
          </label>
        </div>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> Bags
          </label>
        </div>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> Accessories
          </label>
        </div>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> Jewellery
          </label>
        </div>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> Watches
          </label>
        </div>
      </div>
      <div className="rating-item">
        <label>Rating items</label>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> Pretashop
          </label>
        </div>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> Magento
          </label>
        </div>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> Bigcommerce
          </label>
        </div>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> osCommerce
          </label>
        </div>
      </div>
      <div className="price-filter">
        <label>Price Filter</label>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> Pretashop
          </label>
        </div>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> Magento
          </label>
        </div>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> Bigcommerce
          </label>
        </div>
        <div className='label'>
          <label>
            <input type="checkbox" name="productsidebar" value="" /> osCommerce
          </label>
        </div>
      </div>

      {/* <Productdis /> */}
    </div>
  );
};

export default Productsidebar;
