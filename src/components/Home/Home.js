import React from 'react';
import './Home.css';

import sliderImg from '../../assets/images/slider-img.jpg';
import shopImg from '../../assets/images/shop-img.jpg';
import aboutImg from '../../assets/images/about-img.jpg';

import fruitOne from '../../assets/images/f-1.jpg';
import fruitTwo from '../../assets/images/f-2.jpg';
import fruitThree from '../../assets/images/f-3.jpg';
import fruitFour from '../../assets/images/f-4.jpg';
import fruitFive from '../../assets/images/f-5.jpg';
import fruitSix from '../../assets/images/f-6.jpg';

import clientOne from '../../assets/images/client-img.png';
import rightQuote from '../../assets/images/right-quote.png';
import leftQuote from '../../assets/images/left-quote.png';

import location from '../../assets/images/location.png';
import call from '../../assets/images/call.png';
import mail from '../../assets/images/mail.png';
import Header from '../Shared/Header/Header';
import { Link } from 'react-router-dom';

const Home = () => {
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
                  <img src={sliderImg} alt="" />
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
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="sr-only">Next</span>
            </a>
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
              <h2>Fruit shop</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
              </p>
            </div>
            <div className="img-box">
              <img src={shopImg} alt="" />
            </div>
            <div className="btn-box">
              <Link to="products">Buy Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/*end shop section*/}

      {/*about section*/}

      <section className="about_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="img-box">
                <img src={aboutImg} alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="detail-box">
                <div className="heading_container">
                  <hr />
                  <h2>About Our Fruit Shop</h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*end about section*/}

      {/*fruit section*/}

      <section class="fruit_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <hr />
            <h2>Fresh Fruit</h2>
          </div>
        </div>
        <div class="container-fluid">
          <div class="fruit_container">
            <div class="box">
              <img src={fruitOne} alt="" />
              <div class="link_box">
                <h5>Orange</h5>
                <a href="">Buy Now</a>
              </div>
            </div>
            <div class="box">
              <img src={fruitTwo} alt="" />
              <div class="link_box">
                <h5>Blueberry</h5>
                <a href="">Buy Now</a>
              </div>
            </div>
            <div class="box">
              <img src={fruitThree} alt="" />
              <div class="link_box">
                <h5>Banana</h5>
                <a href="">Buy Now</a>
              </div>
            </div>
            <div class="box">
              <img src={fruitFour} alt="" />
              <div class="link_box">
                <h5>Apple</h5>
                <a href="">Buy Now</a>
              </div>
            </div>
            <div class="box">
              <img src={fruitFive} alt="" />
              <div class="link_box">
                <h5>Mango</h5>
                <a href="">Buy Now</a>
              </div>
            </div>
            <div class="box">
              <img src={fruitSix} alt="" />
              <div class="link_box">
                <h5>Strawberry</h5>
                <a href="">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*end fruit section*/}

      {/*client section*/}

      <section class="client_section layout_padding-bottom">
        <div class="container ">
          <div class="heading_container">
            <h2>What Our Cutomer Say</h2>
            <hr />
          </div>
          <div
            id="carouselExample2Controls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="client_container layout_padding-top">
                  <div class="img-box">
                    <img src={clientOne} alt="" />
                  </div>
                  <div class="detail-box">
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
              <div class="carousel-item">
                <div class="client_container layout_padding-top">
                  <div class="img-box">
                    <img src={clientOne} alt="" />
                  </div>
                  <div class="detail-box">
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
              <div class="carousel-item">
                <div class="client_container layout_padding-top">
                  <div class="img-box">
                    <img src={clientOne} alt="" />
                  </div>
                  <div class="detail-box">
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
              class="carousel-control-prev"
              href="#carouselExample2Controls"
              role="button"
              data-slide="prev"
            >
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExample2Controls"
              role="button"
              data-slide="next"
            >
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      {/*end client section*/}

      {/*info section*/}

      <section class="info_section layout_padding">
        <div class="container">
          <div class="info_logo">
            <h2>Kaburu Cereals</h2>
          </div>
          <div class="info_contact">
            <div class="row">
              <div class="col-md-4">
                <a href="">
                  <img src={location} alt="" />
                  <span>Passages of Lorem Ipsum available</span>
                </a>
              </div>
              <div class="col-md-4">
                <a href="">
                  <img src={call} alt="" />
                  <span>Call : +012334567890</span>
                </a>
              </div>
              <div class="col-md-4">
                <a href="">
                  <img src={mail} alt="" />
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*end info section*/}

      {/*footer section*/}
      <section class="container-fluid footer_section ">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved. Design by
          <a href="https://github.com/Jackwitwicky">Jackson Kiarie</a>
        </p>
      </section>
      {/*end footer section*/}
    </div>
  );
};

export default Home;
