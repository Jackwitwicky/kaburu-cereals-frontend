import React from 'react';
import './Footer.scss';
import location from '../../assets/images/location.png';
import call from '../../assets/images/call.png';
import mail from '../../assets/images/mail.png';

const Footer = () => {
  return (
    <>
      {/*info section*/}
      <section id="contact" className="info_section layout_padding">
        <div className="container">
          <div className="info_logo">
            <h2>Kaburu Cereals</h2>
          </div>
          <div className="info_contact">
            <div className="row">
              <div className="col-md-4">
                <a href="">
                  <img src={location} alt="" />
                  <span>Passages of Lorem Ipsum available</span>
                </a>
              </div>
              <div className="col-md-4">
                <a href="">
                  <img src={call} alt="" />
                  <span>Call : +012334567890</span>
                </a>
              </div>
              <div className="col-md-4">
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
      <section className="container-fluid footer_section ">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved. Design by
          <a href="https://github.com/Jackwitwicky">Jackson Kiarie</a>
        </p>
      </section>
      {/*end footer section*/}
    </>
  );
};

export default Footer;
