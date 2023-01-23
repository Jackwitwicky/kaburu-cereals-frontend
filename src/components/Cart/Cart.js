import React from 'react';

import './Cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import classnames from 'classnames';

import Header from '../Shared/Header/Header';
import CartItem from '../CartItem/CartItem';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Footer from '../Footer/Footer';

import {
  fetchCart,
  removeItemFromCart,
  updateCartItemQuantity
} from '../../actions/orderActions';
import { showAlert } from '../../actions/alertActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartFetched = useSelector(({ order }) => order?.cartFetched);
  const cart = useSelector(({ order }) => order?.lineItems);
  const totalOrderPrice = useSelector(({ order }) => order?.displayPrice);

  const guestToken = localStorage.getItem('guest_token');
  const orderNumber = localStorage.getItem('order_number');

  const [termsAccepted, setTermsAccepted] = React.useState(false);

  React.useEffect(() => {
    if (cartFetched) {
      return;
    }

    if (guestToken && orderNumber) {
      dispatch(fetchCart({ guestToken, orderNumber }));
    }
  }, [dispatch]);

  const onRemoveItemHandler = (cartItemId) => {
    if (guestToken && orderNumber) {
      dispatch(
        removeItemFromCart({
          lineItemId: cartItemId,
          guestToken,
          orderNumber
        })
      );
    }
  };

  const onUpdateItemQuantityHandler = (lineItemId, updatedQuantity) => {
    dispatch(
      updateCartItemQuantity({
        data: { quantity: updatedQuantity },
        guestToken,
        orderNumber,
        lineItemId
      })
    );
  };

  const onTermsAcceptedHandler = () => {
    setTermsAccepted(!termsAccepted);
  };

  return (
    <>
      <Header isScrolled={true} />

      <PageTitle title="Your Cart" />

      <div className="container">
        <div className="row">
          <button
            onClick={() => {
              dispatch(showAlert({ message: 'Everything is awesome!!!' }));
              console.log('Do something!');
            }}
          >
            Show Message
          </button>
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
                  {cartFetched &&
                    cart.map((cartItem) => {
                      return (
                        <CartItem
                          key={cartItem.id}
                          lineItemId={cartItem.id}
                          image={cartItem.variant?.images[0]?.smallUrl}
                          title={cartItem.variant?.name}
                          price={cartItem.variant?.displayPrice}
                          weight={cartItem.variant?.weight}
                          quantity={cartItem.quantity}
                          total={cartItem.displayAmount}
                          onRemoveItemHandler={onRemoveItemHandler}
                          onUpdateItemQuantityHandler={
                            onUpdateItemQuantityHandler
                          }
                        />
                      );
                    })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3" className="text-left">
                      <Link to="/products" className="btn--link cart-continue">
                        Continue shopping
                      </Link>
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
                  <span className="money">{totalOrderPrice}</span>
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
                    checked={termsAccepted}
                    onChange={onTermsAcceptedHandler}
                    className="checkbox Cart__terms-checkbox"
                    value="tearm"
                    required=""
                  />
                </label>
              </p>
              <input
                type="submit"
                name="checkout"
                id="cartCheckout"
                className={classnames('btn btn--small-wide checkout', {
                  btn__disabled: !termsAccepted
                })}
                value="Checkout"
                data-tooltip-content="Accept the terms above to checkout"
              />

              {!termsAccepted && (
                <Tooltip
                  anchorId="cartCheckout"
                  place="bottom"
                  events={['hover', 'click']}
                />
              )}
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
