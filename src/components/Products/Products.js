import React from 'react';

import './Products.scss';

import Header from '../Shared/Header/Header';
import Footer from '../Footer/Footer';

import productsBanner from '../../assets/images/products-banner.jpg';
import fruitOne from '../../assets/images/f-1.jpg';
import ProductListItem from '../ProductListItem/ProductListItem';

const Products = () => {
  return (
    <>
      <Header isScrolled={true} />

      <div id="page-content" className="Products">
        {/*Collection Banner*/}
        <div className="collection-header">
          <div className="collection-hero">
            <div className="collection-hero__image">
              <img data-src={productsBanner} src={productsBanner} />
            </div>
            <div className="collection-hero__title-wrapper">
              <h1 className="collection-hero__title page-width">
                All Our Cereals
              </h1>
            </div>
          </div>
        </div>
        {/*End Collection Banner*/}

        <div className="container">
          <div className="row">
            {/*Main Content*/}
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
              <div className="category-description">
                <h3 className="Products__category-header-title">
                  Category Description
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing.
                </p>
              </div>
              <hr />

              <div className="list-view-items grid--view-items">
                {/*ListView Item*/}
                <ProductListItem
                  img={fruitOne}
                  title="Camelia Reversible Jacket"
                  description="Belle Multipurpose Bootstrap 4 Html Template that will
                      give you and your customers a smooth shopping experience
                      which can be used for various kinds of stores such as
                      boutiques, bookstores, technology stores, jewelries and
                      other types of web shops...."
                  price={500}
                />
              </div>
              {/*End ListView Item*/}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
