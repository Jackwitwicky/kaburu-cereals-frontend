import React from 'react';

import './Cart.scss';
import Header from '../Shared/Header/Header';

import fruitOne from '../../assets/images/f-1.jpg';
import CartItem from '../CartItem/CartItem';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Footer from '../Footer/Footer';

const Cart = () => {
  return (
    <>
      <Header isScrolled={true} />

      <PageTitle title="Your Cart" />

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 main-col">
            <form action="#" method="post" className="cart style2">
              <table>
                <thead className="cart__row cart__header">
                  <tr>
                    <th colSpan="2" className="text-center">
                      Product
                    </th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-right">Total</th>
                    <th className="action">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <CartItem
                    image={fruitOne}
                    title="Orange"
                    price={120}
                    weight="1/4"
                    quantity={1}
                  />
                  <CartItem
                    image={fruitOne}
                    title="Pineapple"
                    price={100}
                    weight="1/2"
                    quantity={2}
                  />
                  <CartItem
                    image={fruitOne}
                    title="Grapes"
                    price={50}
                    weight="1/2"
                    quantity={1}
                  />
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3" className="text-left">
                      <a
                        href="http://annimexweb.com/"
                        className="btn--link cart-continue"
                      >
                        <i className="icon icon-arrow-circle-left"></i> Continue
                        shopping
                      </a>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </form>
          </div>

          <div className="col-12 col-sm-12 col-md-4 col-lg-4 cart__footer">
            <div className="cart-note">
              <div className="solid-border">
                <h5>
                  <label
                    htmlFor="CartSpecialInstructions"
                    className="cart-note__label small--text-center"
                  >
                    Add a note to your order
                  </label>
                </h5>
                <textarea
                  name="note"
                  id="CartSpecialInstructions"
                  className="cart-note__input"
                ></textarea>
              </div>
            </div>
            <div className="solid-border">
              <div className="row">
                <span className="col-12 col-sm-6 cart__subtotal-title">
                  <strong>Subtotal</strong>
                </span>
                <span className="col-12 col-sm-6 cart__subtotal-title cart__subtotal text-right">
                  <span className="money">$735.00</span>
                </span>
              </div>
              <div className="cart__shipping">
                Shipping &amp; taxes calculated at checkout
              </div>
              <p className="cart_tearm">
                <label>
                  I agree with the terms and conditions
                  <input
                    type="checkbox"
                    name="tearm"
                    id="cartTearm"
                    className="checkbox"
                    value="tearm"
                    required=""
                  />
                </label>
              </p>
              <input
                type="submit"
                name="checkout"
                id="cartCheckout"
                className="btn btn--small-wide checkout"
                value="Checkout"
              />
            </div>
          </div>
        </div>
      </div>
      {/*End Page Title*/}

      <Footer />
    </>
  );
};

export default Cart;
