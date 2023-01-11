import React from 'react';
import './Home.css';

import { useSelector, useDispatch } from "react-redux";

import sliderImg from '../../assets/images/slider-img.jpg';
import cerealSack from '../../assets/images/cereal-sack.png';
import cerealBoxImg from '../../assets/images/cereal-box.jpg';

import riceImage from '../../assets/images/rice.jpg';
import kamandeImage from '../../assets/images/kamande.jpg';
import popcornImage from '../../assets/images/popcorn.jpg';
import groundnutsImage from '../../assets/images/groundnuts.png';
import maizeMealImage from '../../assets/images/maize-meal.jpg';
import yellowBeanImage from '../../assets/images/yellow-bean.jpg';

import clientOne from '../../assets/images/client-img.png';
import rightQuote from '../../assets/images/right-quote.png';
import leftQuote from '../../assets/images/left-quote.png';
import headerBannerImg from '../../assets/images/cereals_one.jpg';

import Header from '../Shared/Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import HomeProductItem from '../HomeProductItem/HomeProductItem';
import getProducts from '../../api/product/get-products';

const Home = () => {
  const dispatch = useDispatch();

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const scrollListener = document.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });

    return () => {
      document.removeEventListener('scroll', scrollListener);
    };
  }, []);

  React.useEffect(() => {
    console.log('*** About to make get products request: ');
    getProducts();
    console.log('*** Done making get products request: ');
  }, []);

  return (
    <div>
      <div className="hero_area">
        {/*header section starts*/}
        <div className="brand_box">
          <a className="navbar-brand" href="index.html">
            <span>Kaburu Cereals</span>
          </a>
        </div>
        {/*end header section*/}
        {/*slider section*/}
        <section className=" slider_section position-relative">
          <div
            id="carouselExampleControls"
            className="carousel slide "
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="img-box Home__header-image-container">
                  <img src={headerBannerImg} alt="" />
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-box">
                  <img src={sliderImg} alt="" />
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-box">
                  <img src={sliderImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*end slider section*/}
      </div>

      {/*nav section*/}

      <Header isScrolled={isScrolled} />

      {/*shop section*/}

      <section className="shop_section layout_padding">
        <div className="container">
          <div className="box">
            <div className="detail-box">
              <h2>Kaburu Cereals</h2>
              <p>The best and most affordable cereals, just an order away</p>
            </div>
            <div className="img-box">
              <img src={cerealSack} alt="" />
            </div>
            <div className="btn-box">
              <Link to="products">Buy Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/*end shop section*/}

      {/*about section*/}

      <section id="about" className="about_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="img-box">
                <img src={cerealBoxImg} alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="detail-box">
                <div className="heading_container">
                  <hr />
                  <h2>About Our Cereal Shop</h2>
                </div>
                <p>
                  We source all our cereals directly from our vetted list of
                  local farmers to ensure the best approved quality and
                  unmatched pricing compared with our competitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*end about section*/}

      {/*cereal section*/}

      <section className="fruit_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <hr />
            <h2>Recently Added Cereals</h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="fruit_container">
            <HomeProductItem image={riceImage} title="Rice" />
            <HomeProductItem image={kamandeImage} title="Kamande" />
            <HomeProductItem image={popcornImage} title="Popcorn" />
            <HomeProductItem image={groundnutsImage} title="Ground Nuts" />
            <HomeProductItem image={maizeMealImage} title="Maize Meal" />
            <HomeProductItem image={yellowBeanImage} title="Yellow Bean" />
          </div>
        </div>
      </section>

      {/*end cereal section*/}

      {/*client section*/}

      <section
        id="testimonial"
        className="client_section layout_padding-bottom"
      >
        <div className="container ">
          <div className="heading_container">
            <h2>What Our Cutomer Say</h2>
            <hr />
          </div>
          <div
            id="carouselExample2Controls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="client_container layout_padding-top">
                  <div className="img-box">
                    <img src={clientOne} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Jone Mark</h5>
                    <p>
                      <img src={leftQuote} alt="" />
                      <span>Lorem ipsum dolor sit amet,</span>
                      <img src={rightQuote} alt="" /> <br />
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="client_container layout_padding-top">
                  <div className="img-box">
                    <img src={clientOne} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Jone Mark</h5>
                    <p>
                      <img src={leftQuote} alt="" />
                      <span>Lorem ipsum dolor sit amet,</span>
                      <img src={rightQuote} alt="" /> <br />
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="client_container layout_padding-top">
                  <div className="img-box">
                    <img src={clientOne} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Jone Mark</h5>
                    <p>
                      <img src={leftQuote} alt="" />
                      <span>Lorem ipsum dolor sit amet,</span>
                      <img src={rightQuote} alt="" /> <br />
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExample2Controls"
              role="button"
              data-slide="prev"
            >
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExample2Controls"
              role="button"
              data-slide="next"
            >
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      {/*end client section*/}

      <Footer />
    </div>
  );
};

export default Home;
