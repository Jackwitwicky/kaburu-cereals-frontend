import React from 'react';

import './HomeProductItem.scss';
import { Link } from 'react-router-dom';

const HomeProductItem = ({ image, title, slug }) => {
  return (
    <div className="HomeProductItem box">
      <img src={image} alt="" />
      <div className="link_box">
        <h5>{title}</h5>
        <Link to={`/products/${slug}`}>Buy Now</Link>
      </div>
    </div>
  );
};

export default HomeProductItem;
