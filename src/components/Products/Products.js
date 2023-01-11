import React from 'react';

import './Products.scss';

import Header from '../Shared/Header/Header';
import Footer from '../Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';

import productsBanner from '../../assets/images/cereals_bg.jpg';
import ProductListItem from '../ProductListItem/ProductListItem';

import { getProducts } from '../../actions/productActions';

const Products = () => {
  const dispatch = useDispatch();

  const allProductsFetched = useSelector((state) => state.allProductsFetched);
  const products = useSelector((state) => state.products);

  React.useEffect(() => {
    if (!allProductsFetched) {
      dispatch(getProducts());
    }
  }, []);

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
                {products.map((product) => {
                  return (
                    <ProductListItem
                      key={product?.id}
                      image={product?.master?.images[0]?.largeUrl}
                      title={product?.name}
                      description={product?.description}
                      price={product?.displayPrice}
                    />
                  );
                })}
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
