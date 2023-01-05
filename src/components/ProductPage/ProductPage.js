import React from 'react';

import './ProductPage.css';
import Header from '../Shared/Header/Header';

import fruitOne from '../../assets/images/f-1.jpg';
import creditCardImg from '../../assets/images/credit-card.png';
import securityImg from '../../assets/images/shield.png';
import globalShippingImg from '../../assets/images/worldwide.png';
import callImg from '../../assets/images/phone-call.png';

const ProductPage = () => {
  return (
    <>
      <Header isScrolled={true} />

      {/*Body Content*/}
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
                    src={fruitOne}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="product-single__meta">
                  <h1 className="product-single__title">
                    Product with Variant Image
                  </h1>
                  <div className="product-nav clearfix">
                    <a href="#" className="next" title="Next">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div className="prInfoRow">
                    <div className="product-stock">
                      <span className="instock">In Stock</span>
                    </div>
                    <div className="product-sku">
                      SKU: <span className="variant-sku">19115-rdxs</span>
                    </div>
                  </div>
                  <p className="product-single__price product-single__price-product-template">
                    <span className="visually-hidden">Regular price</span>
                    <span className="product-price__price product-price__price-product-template">
                      <span id="ProductPrice-product-template">
                        <span className="money">$550.00</span>
                      </span>
                    </span>
                  </p>
                  <div className="product-single__description rte">
                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness.
                    </p>
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
                        <label className="header">
                          Size: <span className="slVariant">XS</span>
                        </label>
                        <div
                          data-value="XS"
                          className="swatch-element xs available"
                        >
                          <input
                            className="swatchInput"
                            id="swatch-1-xs"
                            type="radio"
                            name="option-1"
                            value="XS"
                          />
                          <label
                            className="swatchLbl medium rectangle"
                            htmlFor="swatch-1-xs"
                            title="XS"
                          >
                            XS
                          </label>
                        </div>
                        <div
                          data-value="S"
                          className="swatch-element s available"
                        >
                          <input
                            className="swatchInput"
                            id="swatch-1-s"
                            type="radio"
                            name="option-1"
                            value="S"
                          />
                          <label
                            className="swatchLbl medium rectangle"
                            htmlFor="swatch-1-s"
                            title="S"
                          >
                            S
                          </label>
                        </div>
                        <div
                          data-value="M"
                          className="swatch-element m available"
                        >
                          <input
                            className="swatchInput"
                            id="swatch-1-m"
                            type="radio"
                            name="option-1"
                            value="M"
                          />
                          <label
                            className="swatchLbl medium rectangle"
                            htmlFor="swatch-1-m"
                            title="M"
                          >
                            M
                          </label>
                        </div>
                        <div
                          data-value="L"
                          className="swatch-element l available"
                        >
                          <input
                            className="swatchInput"
                            id="swatch-1-l"
                            type="radio"
                            name="option-1"
                            value="L"
                          />
                          <label
                            className="swatchLbl medium rectangle"
                            htmlFor="swatch-1-l"
                            title="L"
                          >
                            L
                          </label>
                        </div>
                        <div
                          data-value="XL"
                          className="swatch-element xl available"
                        >
                          <input
                            className="swatchInput"
                            id="swatch-1-xl"
                            type="radio"
                            name="option-1"
                            value="XL"
                          />
                          <label
                            className="swatchLbl medium rectangle"
                            htmlFor="swatch-1-xl"
                            title="XL"
                          >
                            XL
                          </label>
                        </div>
                      </div>
                    </div>
                    {/*Product Action*/}
                    <div className="product-action clearfix">
                      <div className="product-form__item--quantity">
                        <div className="wrapQtyBtn">
                          <div className="qtyField">
                            <a
                              className="qtyBtn minus"
                              href="javascript:void(0);"
                            >
                              <i
                                className="fa anm anm-minus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <input
                              type="text"
                              id="Quantity"
                              name="quantity"
                              value="1"
                              className="product-form__input qty"
                            />
                            <a
                              className="qtyBtn plus"
                              href="javascript:void(0);"
                            >
                              <i
                                className="fa anm anm-plus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-form__item--submit">
                        <button
                          type="button"
                          name="add"
                          className="btn product-form__cart-submit ProductPage__add-to-cart-btn"
                        >
                          <span id="AddToCartText-product-template">
                            Pre-Order Now!
                          </span>
                        </button>
                      </div>
                    </div>
                    {/*End Product Action*/}
                  </form>
                </div>
                <div className="product-info">
                  <p className="product-type">
                    <span className="lbl">Product Type:</span>
                    <a href="#" title="Women's">
                      Women`&apos;`s
                    </a>
                  </p>
                  <p className="product-cat">
                    <span className="lbl">Collections: </span>
                    <a href="#" title="">
                      Women
                    </a>
                  </p>
                  <p className="product-tags">
                    <span className="lbl">Product Tags: </span>
                    <a href="#">$100 - $400</a>, <a href="#">$400 - $600</a>,
                    <a href="#">$600 - $800</a>, <a href="#">Above $800</a>,
                    <a href="#">Gray</a>, <a href="#">Hot</a>,
                    <a href="#">Orange</a>, <a href="#">Red</a>,
                    <a href="#">S</a>, <a href="#">Shoe</a>
                  </p>
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
                  FREE &amp; fast shipping to over 200+ countries &amp; regions.
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
                <img src={callImg} alt="Hotline" title="Hotline" />
                <div className="details">
                  <h3>Hotline</h3>
                  Talk to help line for your question on 4141 456 789, 4125 666
                  888
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
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
              <li>Neque porro quisquam est qui dolorem ipsum quia dolor</li>
              <li>Lorem Ipsum is not simply random text.</li>
              <li>Free theme updates</li>
            </ul>
            <h3>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            </h3>
            <p>
              You can change the position of any sections such as slider,
              banner, products, collection and so on by just dragging and
              dropping.&nbsp;
            </p>
            <h3>Lorem Ipsum is not simply random text.</h3>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness.
            </p>
            <p>
              Change colors, fonts, banners, megamenus and more. Preview changes
              are live before saving them.
            </p>
            <h3>1914 translation by H. Rackham</h3>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
