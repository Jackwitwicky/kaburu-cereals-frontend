import React from 'react';

import './ProductListItem.scss';

const ProductListItem = ({ image, title, description, price }) => {
  return (
    <>
      <div className="list-product list-view-item">
        <div className="list-view-item__image-column">
          <div className="list-view-item__image-wrapper">
            <a href="product-layout-2.html">
              <img
                className="list-view-item__image blur-up lazyload"
                data-src={image}
                src={image}
                alt="image"
                title="product"
              />
            </a>
          </div>
        </div>
        <div className="list-view-item__title-column">
          <div className="h4 grid-view-item__title">
            <a href="product-layout-2.html">{title}</a>
          </div>
          {/*Short Description*/}
          <p>{description}</p>
          {/*End Short Description*/}
          {/*Price*/}
          <p className="product-price grid-view-item__meta">
            <span className="product-price__price product-price__sale">
              <span className="money">{price}</span>
            </span>
          </p>
          {/*End Price*/}
          <form className="variants" action="#">
            <button className="btn btn--small" type="button">
              View Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductListItem;
