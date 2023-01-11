import React from 'react';
import './Header.css';

import classnames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = ({ isScrolled }) => {
  const location = useLocation();
  const isHomePath = location.pathname === '/';

  return (
    <>
      {/*nav section*/}
      <section
        className={classnames('nav_section', { Header__sticky: isScrolled })}
      >
        <div className="container">
          <div className="custom_nav2">
            <nav className="navbar navbar-expand custom_nav-container ">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex  flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <HashLink to="/#about" className="nav-link">
                        About
                      </HashLink>
                    </li>
                    <li className="nav-item">
                      <Link to="/products" className="nav-link">
                        All Cereals
                      </Link>
                    </li>
                    {isHomePath && (
                      <li className="nav-item">
                        <HashLink to="#testimonial" className="nav-link">
                          Testimonial
                        </HashLink>
                      </li>
                    )}
                    <li className="nav-item">
                      <HashLink to="#contact" className="nav-link">
                        Contact Us
                      </HashLink>
                    </li>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/cart">
                        Cart
                      </Link>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    ></button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>

      {/*end nav section*/}
    </>
  );
};

export default Header;
