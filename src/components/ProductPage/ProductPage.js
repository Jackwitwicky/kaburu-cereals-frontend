import React from 'react';

import './ProductPage.css';
import Header from "../Shared/Header/Header";
import fruitOne from '../../assets/images/f-1.jpg';

const ProductPage = () => {

  return(
    <>
      <Header isScrolled={true}/>

      {/*Body Content*/}
      <div id="page-content" className="ProductPage__container">
        {/*MainContent*/}
        <div id="MainContent" className="main-content" role="main">
          {/*Breadcrumb*/}
          <div className="bredcrumbWrap">
            <div className="container breadcrumbs" role="navigation" aria-label="breadcrumbs">
              <a href="index.html" title="Back to the home page">Home</a><span aria-hidden="true">›</span><span>Product with Variant Image</span>
            </div>
          </div>
          {/*End Breadcrumb*/}

          {/*product-single*/}
          <div class="product-single">
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
                    <a href="#" className="next" title="Next"
                    ><i className="fa fa-angle-right" aria-hidden="true"></i
                    ></a>
                  </div>
                  <div className="prInfoRow">
                    <div className="product-stock">
                      <span className="instock">In Stock</span>
                      <span className="outstock hide">Unavailable</span>
                    </div>
                    <div className="product-sku">
                      SKU: <span className="variant-sku">19115-rdxs</span>
                    </div>
                    <div className="product-review">
                      <a className="reviewLink" href="#tab2"
                      ><i className="font-13 fa fa-star"></i
                      ><i className="font-13 fa fa-star"></i
                      ><i className="font-13 fa fa-star"></i
                      ><i className="font-13 fa fa-star-o"></i
                      ><i className="font-13 fa fa-star-o"></i
                      ><span className="spr-badge-caption">6 reviews</span></a
                      >
                    </div>
                  </div>
                  <p
                    className="product-single__price product-single__price-product-template"
                  >
                    <span className="visually-hidden">Regular price</span>
                    <span
                      className="product-price__price product-price__price-product-template"
                    >
                        <span id="ProductPrice-product-template"
                        ><span className="money">$550.00</span></span
                        >
                      </span>
                  </p>
                  <div className="product-single__description rte">
                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I
                      will give you a complete account of the system, and
                      expound the actual teachings of the great explorer of
                      the truth, the master-builder of human happiness.
                    </p>
                  </div>
                  <form
                    method="post"
                    action="http://annimexweb.com/cart/add"
                    id="product_form_10508262282"
                    accept-charset="UTF-8"
                    className="product-form product-form-product-template hidedropdown"
                    encType="multipart/form-data"
                  >
                    <div
                      className="swatch clearfix swatch-0 option1"
                      data-option-index="0"
                    >
                      <div className="product-form__item">
                        <label className="header"
                        >Color: <span className="slVariant">Red</span></label
                        >
                        <div
                          data-value="Red"
                          className="swatch-element color red available"
                        >
                          <input
                            className="swatchInput"
                            id="swatch-0-red"
                            type="radio"
                            name="option-0"
                            value="Red"
                          />
                          <label
                            className="swatchLbl color medium rectangle"
                            htmlFor="swatch-0-red"
                            title="Red"
                          ></label>
                        </div>
                        <div
                          data-value="Blue"
                          className="swatch-element color blue available"
                        >
                          <input
                            className="swatchInput"
                            id="swatch-0-blue"
                            type="radio"
                            name="option-0"
                            value="Blue"
                          />
                          <label
                            className="swatchLbl color medium rectangle"
                            htmlFor="swatch-0-blue"
                            title="Blue"
                          ></label>
                        </div>
                        <div
                          data-value="Green"
                          className="swatch-element color green available"
                        >
                          <input
                            className="swatchInput"
                            id="swatch-0-green"
                            type="radio"
                            name="option-0"
                            value="Green"
                          />
                          <label
                            className="swatchLbl color medium rectangle"
                            htmlFor="swatch-0-green"
                            title="Green"
                          ></label>
                        </div>
                        <div
                          data-value="Gray"
                          className="swatch-element color gray available"
                        >
                          <input
                            className="swatchInput"
                            id="swatch-0-gray"
                            type="radio"
                            name="option-0"
                            value="Gray"
                          />
                          <label
                            className="swatchLbl color medium rectangle"
                            htmlFor="swatch-0-gray"
                            title="Gray"
                          ></label>
                        </div>
                        <div
                          data-value="aqua"
                          className="swatch-element color aqua available"
                        >
                          <input
                            className="swatchInput"
                            id="swatch-0-aqua"
                            type="radio"
                            name="option-0"
                            value="aqua"
                          />
                          <label
                            className="swatchLbl color medium rectangle"
                            htmlFor="swatch-0-aqua"
                            title="aqua"
                          ></label>
                        </div>
                        <div
                          data-value="Orange"
                          className="swatch-element color orange available"
                        >
                          <input
                            className="swatchInput"
                            id="swatch-0-orange"
                            type="radio"
                            name="option-0"
                            value="Orange"
                          />
                          <label
                            className="swatchLbl color medium rectangle"
                            htmlFor="swatch-0-orange"
                            title="Orange"
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swatch clearfix swatch-1 option2"
                      data-option-index="1"
                    >
                      <div className="product-form__item">
                        <label className="header"
                        >Size: <span className="slVariant">XS</span></label
                        >
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
                          >XS</label
                          >
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
                          >S</label
                          >
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
                          >M</label
                          >
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
                          >L</label
                          >
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
                          >XL</label
                          >
                        </div>
                      </div>
                    </div>
                    <p className="infolinks">
                      <a href="#sizechart" className="sizelink btn">
                        Size Guide</a>
                      <a href="#productInquiry" className="emaillink btn">
                        Ask About this Product</a
                      >
                    </p>
                    {/*Product Action*/}
                    <div className="product-action clearfix">
                      <div className="product-form__item--quantity">
                        <div className="wrapQtyBtn">
                          <div className="qtyField">
                            <a className="qtyBtn minus" href="javascript:void(0);"
                            ><i
                              className="fa anm anm-minus-r"
                              aria-hidden="true"
                            ></i
                            ></a>
                            <input
                              type="text"
                              id="Quantity"
                              name="quantity"
                              value="1"
                              className="product-form__input qty"
                            />
                            <a className="qtyBtn plus" href="javascript:void(0);"
                            ><i
                              className="fa anm anm-plus-r"
                              aria-hidden="true"
                            ></i
                            ></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-form__item--submit">
                        <button
                          type="button"
                          name="add"
                          className="btn product-form__cart-submit"
                        >
                            <span id="AddToCartText-product-template"
                            >Pre-Order Now!</span
                            >
                        </button>
                      </div>
                    </div>
                    {/*End Product Action*/}
                  </form>
                  <div className="display-table shareRow">
                    <div className="display-table-cell medium-up--one-third">
                      <div className="wishlist-btn">
                        <a
                          className="wishlist add-to-wishlist"
                          href="#"
                          title="Add to Wishlist"
                        ><i
                          className="icon anm anm-heart-l"
                          aria-hidden="true"
                        ></i>
                          <span>Add to Wishlist</span></a
                        >
                      </div>
                    </div>
                    <div className="display-table-cell text-right">
                      <div className="social-sharing">
                        <a
                          target="_blank"
                          href="#"
                          className="btn btn--small btn--secondary btn--share share-facebook"
                          title="Share on Facebook"
                        >
                          <i
                            className="fa fa-facebook-square"
                            aria-hidden="true"
                          ></i>
                          <span className="share-title" aria-hidden="true"
                          >Share</span
                          >
                        </a>
                        <a
                          target="_blank"
                          href="#"
                          className="btn btn--small btn--secondary btn--share share-twitter"
                          title="Tweet on Twitter"
                        >
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                          <span className="share-title" aria-hidden="true"
                          >Tweet</span
                          >
                        </a>
                        <a
                          href="#"
                          title="Share on google+"
                          className="btn btn--small btn--secondary btn--share"
                        >
                          <i className="fa fa-google-plus" aria-hidden="true"></i>
                          <span className="share-title" aria-hidden="true"
                          >Google+</span
                          >
                        </a>
                        <a
                          target="_blank"
                          href="#"
                          className="btn btn--small btn--secondary btn--share share-pinterest"
                          title="Pin on Pinterest"
                        >
                          <i className="fa fa-pinterest" aria-hidden="true"></i>
                          <span className="share-title" aria-hidden="true"
                          >Pin it</span
                          >
                        </a>
                        <a
                          href="#"
                          className="btn btn--small btn--secondary btn--share share-pinterest"
                          title="Share by Email"
                          target="_blank"
                        >
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                          <span className="share-title" aria-hidden="true"
                          >Email</span
                          >
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <p className="product-type">
                    <span className="lbl">Product Type:</span>
                    <a href="#" title="Women's">Women's</a>
                  </p>
                  <p className="product-cat">
                      <span className="lbl">Collections: </span
                      ><a href="#" title="">Women</a>
                  </p>
                  <p className="product-tags">
                      <span className="lbl">Product Tags: </span
                      ><a href="#">$100 - $400</a>, <a href="#">$400 - $600</a>,
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
        </div>
      </div>
    </>
  );
};

export default ProductPage;
