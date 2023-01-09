import React from 'react';

import './RelatedProductItem.scss';

const RelatedProductItem = ({ image, title, price }) => {
  return (
    <div className="ProductPage__related-products_container">
      <div className="col-3 item">
        {/*start product image*/}
        <div className="ProductPage__product-image-container">
          <a href="#">
            {/*image*/}
            <img
              className="primary blur-up lazyload Product ProductPage__related-product-image"
              data-src={image}
              src={image}
              alt="image"
              title="product"
            />
            {/*End image*/}
            {/*Hover image*/}
            {/*End hover image*/}
          </a>
          {/*end product image*/}

          {/*Start product button*/}
          <form
            className="ProductPage__related-product-add add"
            action="#"
            onClick="window.location.href='cart.html'"
            method="post"
          >
            <button
              className="btn btn-addto-cart ProductPage__related-product-add_button"
              type="button"
              tabIndex="0"
            >
              View Product
            </button>
          </form>
          <div className="button-set">
            <a href="#" title="Quick View" className="quick-view" tabIndex="0">
              <i className="icon anm anm-search-plus-r"></i>
            </a>
            <div className="wishlist-btn">
              <a className="wishlist add-to-wishlist" href="wishlist.html">
                <i className="icon anm anm-heart-l"></i>
              </a>
            </div>
          </div>
          {/*end product button*/}
        </div>
        {/*end product image*/}
        {/*start product details*/}
        <div className="product-details text-center">
          {/*product name*/}
          <div className="ProductPage-related-product-name">
            <a href="#">{title}</a>
          </div>
          {/*End product name*/}
          {/*product price*/}
          <div className="product-price">
            <span className="price">${price}</span>
          </div>
          {/*End product price*/}
        </div>
        {/*End product details*/}
      </div>
    </div>
  );
};

export default RelatedProductItem;
