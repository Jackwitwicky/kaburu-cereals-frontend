import React from 'react';

import './CartItem.scss';

const CartItem = ({ image, title, weight, price, quantity }) => {
  return (
    <tr className="cart__row border-bottom line1 cart-flex border-top">
      <td className="cart__image-wrapper cart-flex-item">
        <a href="#">
          <img
            className="cart__image"
            src={image}
            alt="Elastic Waist Dress - Navy / Small"
          />
        </a>
      </td>
      <td className="cart__meta small--text-left cart-flex-item">
        <div className="list-view-item__title">
          <a href="#">{title}</a>
        </div>

        <div className="cart__meta-text">
          Weight: {weight} KG
          <br />
        </div>
      </td>
      <td className="cart__price-wrapper cart-flex-item">
        <span className="money">${price}</span>
      </td>
      <td className="cart__update-wrapper cart-flex-item text-right">
        <div className="cart__qty text-center">
          <div className="qtyField">
            <a className="qtyBtn minus" href="javascript:void(0);">
              <i className="icon icon-minus"></i>
            </a>
            <input
              className="cart__qty-input qty"
              type="text"
              name="updates[]"
              id="qty"
              value={quantity}
              pattern="[0-9]*"
            ></input>
            <a className="qtyBtn plus" href="javascript:void(0);">
              <i className="icon icon-minus"></i>
            </a>
          </div>
        </div>
      </td>
      <td className="text-right small--hide cart-price">
        <div>
          <span className="money">$735.00</span>
        </div>
      </td>
      <td className="text-center small--hide">
        <a
          href="#"
          className="btn btn--secondary cart__remove"
          title="Remove tem"
        >
          <i className="icon icon anm anm-times-l"></i>
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
