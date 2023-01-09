import React from 'react';

import './HomeProductItem.scss';

const HomeProductItem = ({ image, title }) => {
  return (
    <div className="HomeProductItem box">
      <img src={image} alt="" />
      <div className="link_box">
        <h5>{title}</h5>
        <a href="">Buy Now</a>
      </div>
    </div>
  );
};

export default HomeProductItem;
