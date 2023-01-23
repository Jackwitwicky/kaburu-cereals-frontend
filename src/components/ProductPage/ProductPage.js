import React from 'react';

import './ProductPage.scss';

import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { BsPlus, BsDash } from 'react-icons/bs';

import Header from '../Shared/Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import WeightOption from '../WeightOption/WeightOption';
import RelatedProductItem from '../RelatedProductItem/RelatedProductItem';

import fruitOne from '../../assets/images/f-1.jpg';
import creditCardImg from '../../assets/images/credit-card.png';
import securityImg from '../../assets/images/shield.png';
import globalShippingImg from '../../assets/images/worldwide.png';
import callImg from '../../assets/images/phone-call.png';
import { getProducts } from '../../actions/productActions';
import { createOrder, fetchCart, updateCart } from '../../actions/orderActions';
import classnames from 'classnames';

const ProductPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const locationPathNames = location.pathname.split('/');
  const productSlug = locationPathNames.pop() || locationPathNames.pop();

  const product = useSelector((state) =>
    state.products.products.find((product) => product.slug === productSlug)
  );
  const allProductsFetched = useSelector(
    ({ products }) => products.allProductsFetched
  );

  const [selectedVariant, setSelectedVariant] = React.useState(null);
  const [selectedItemCount, setSelectedItemCount] = React.useState(1);
  const [cart, setCart] = React.useState({ quantity: 1, variantId: 0 });
  const [guestToken, setGuestToken] = React.useState();
  const [orderNumber, setOrderNumber] = React.useState();

  React.useEffect(() => {
    if (!allProductsFetched) {
      dispatch(getProducts());
    }
  }, []);

  React.useEffect(() => {
    const guestToken = localStorage.getItem('guest_token');
    const orderNumber = localStorage.getItem('order_number');

    if (guestToken && orderNumber) {
      setGuestToken(guestToken);
      setOrderNumber(orderNumber);
      console.log('The token is: ', guestToken);
      dispatch(fetchCart({ guestToken, orderNumber }));
    }
  }, [dispatch]);

  const onWeightOptionSelected = (index) => {
    setSelectedVariant(
      product?.variants.find((variant) => variant.id === index)
    );
    setCart({ ...cart, variantId: index });
  };

  const onAddItemCountHandler = () => {
    if (product?.totalOnHand > 0) {
      setCart({ ...cart, quantity: selectedItemCount + 1 });
      setSelectedItemCount(selectedItemCount + 1);
    }
  };

  const onSubtractItemCountHandler = () => {
    if (selectedItemCount > 1 && product?.totalOnHand > 0) {
      setCart({ ...cart, quantity: selectedItemCount - 1 });
      setSelectedItemCount(selectedItemCount - 1);
    }
  };

  const onAddToCartHandler = () => {
    if (guestToken && orderNumber) {
      dispatch(updateCart({ data: cart, guestToken, orderNumber }));
    } else {
      dispatch(createOrder(cart));
    }
  };

  return (
    <>
      {console.log('***The product is: ', product)}
      <Header isScrolled={true} />
      {!allProductsFetched && <Loader />}

      {/*Body Content*/}
      {allProductsFetched && (
        <div
          id="page-content"
          className="ProductPage__container product-template__container"
        >
          {/*MainContent*/}
          <div id="MainContent" className="main-content" role="main">
            {/*Breadcrumb*/}
            <div className="bredcrumbWrap">
              <div
                className="container breadcrumbs"
                role="navigation"
                aria-label="breadcrumbs"
              >
                <a href="index.html" title="Back to the home page">
                  Home
                </a>
                <span aria-hidden="true">›</span>
                <span>Product with Variant Image</span>
              </div>
            </div>
            {/*End Breadcrumb*/}

            {/*product-single*/}
            <div className="product-single">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="product-details-img ProductPage__product-image">
                    <img
                      data-zoom-image="assets/images/product-detail-page/product-with-right-thumbs-1.jpg"
                      alt=""
                      src={product?.master?.images[0]?.largeUrl}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="product-single__meta">
                    <h1 className="product-single__title">{product?.name}</h1>
                    <div className="product-nav clearfix">
                      <a href="#" className="next" title="Next">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div className="prInfoRow">
                      <div className="product-stock">
                        {product?.totalOnHand > 0 && (
                          <span className="instock">In Stock</span>
                        )}
                        {product?.totalOnHand === 0 && (
                          <span className="out-of-stock">Out of Stock</span>
                        )}
                      </div>
                    </div>
                    <p className="product-single__price product-single__price-product-template">
                      <span className="visually-hidden">Regular price</span>
                      <span className="product-price__price product-price__price-product-template">
                        <span id="ProductPrice-product-template">
                          <span className="money">{product?.displayPrice}</span>
                        </span>
                      </span>
                    </p>
                    <div className="product-single__description rte">
                      <p>{product?.description}</p>
                    </div>
                    <form
                      method="post"
                      action="http://annimexweb.com/cart/add"
                      id="product_form_10508262282"
                      acceptCharset="UTF-8"
                      className="product-form product-form-product-template hidedropdown"
                      encType="multipart/form-data"
                    >
                      <div
                        className="swatch clearfix swatch-1 option2"
                        data-option-index="1"
                      >
                        <div className="product-form__item">
                          <label className="header ProductPage__selected-weight">
                            Weight:{' '}
                            <span className="slVariant">
                              {selectedVariant
                                ? selectedVariant.optionValues[0]?.presentation
                                : 'Not selected'}
                            </span>
                          </label>
                          {product?.variants.map((variant) => {
                            return (
                              <WeightOption
                                key={variant.id}
                                index={variant.id}
                                title={variant?.optionValues[0]?.presentation}
                                inStock={variant.inStock}
                                onWeightOptionSelected={onWeightOptionSelected}
                              />
                            );
                          })}
                        </div>
                      </div>
                      {/*Product Action*/}
                      <div className="product-action clearfix">
                        <div className="product-form__item--quantity">
                          <div className="wrapQtyBtn">
                            <div className="qtyField">
                              <a
                                className={classnames('qtyBtn minus', {
                                  'qtyBtn__out-of-stock':
                                    product?.totalOnHand === 0
                                })}
                                onClick={() => onSubtractItemCountHandler()}
                              >
                                <BsDash />
                              </a>
                              <input
                                type="text"
                                id="Quantity"
                                name="quantity"
                                value={selectedItemCount}
                                className="product-form__input qty"
                              />
                              <a
                                className={classnames('qtyBtn plus', {
                                  'qtyBtn__out-of-stock':
                                    product?.totalOnHand === 0
                                })}
                                onClick={() => onAddItemCountHandler()}
                              >
                                <BsPlus />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="product-form__item--submit">
                          <button
                            type="button"
                            name="add"
                            className="btn product-form__cart-submit ProductPage__add-to-cart-btn"
                            disabled={
                              selectedVariant === null ||
                              product?.totalOnHand === 0
                            }
                            onClick={() => onAddToCartHandler()}
                          >
                            <span id="AddToCartText-product-template">
                              Add To Cart
                            </span>
                          </button>
                        </div>
                      </div>
                      {/*End Product Action*/}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*End-product-single*/}

            {/*Product Feature*/}
            <div className="prFeatures">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
                  <img
                    src={creditCardImg}
                    alt="Safe Payment"
                    title="Safe Payment"
                  />
                  <div className="details">
                    <h3>Safe Payment</h3>
                    Pay with the world`&apos;`s most payment methods.
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
                  <img src={securityImg} alt="Confidence" title="Confidence" />
                  <div className="details">
                    <h3>Confidence</h3>
                    Protection covers your purchase and personal data.
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
                  <img
                    src={globalShippingImg}
                    alt="Worldwide Delivery"
                    title="Worldwide Delivery"
                  />
                  <div className="details">
                    <h3>Worldwide Delivery</h3>
                    FREE &amp; fast shipping to over 200+ countries &amp;
                    regions.
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
                  <img src={callImg} alt="Hotline" title="Hotline" />
                  <div className="details">
                    <h3>Hotline</h3>
                    Talk to help line for your question on 4141 456 789, 4125
                    666 888
                  </div>
                </div>
              </div>
            </div>
            {/*End Product Feature*/}

            {/*Product Details*/}

            <h3>Product Details</h3>
            <div className="product-description rte">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
                <li>Neque porro quisquam est qui dolorem ipsum quia dolor</li>
                <li>Lorem Ipsum is not simply random text.</li>
                <li>Free theme updates</li>
              </ul>
            </div>

            {/*Related Product Slider*/}
            <div className="related-product grid-products">
              <header className="section-header">
                <h2 className="section-header__title text-center h2">
                  <span>Related Products</span>
                </h2>
                <p className="sub-heading">
                  Find other similar products that you may like
                </p>
              </header>

              <RelatedProductItem
                image={fruitOne}
                title="Orange"
                price={600.0}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProductPage;
