import React from 'react';
import './Header.css';

import classnames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useSelector, useDispatch } from 'react-redux';
import AlertMessage from '../../AlertMessage/AlertMessage';
import { hideAlert } from '../../../actions/alertActions';

const Header = ({ isScrolled }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isHomePath = location.pathname === '/';

  const cartFetched = useSelector(({ order }) => order?.cartFetched);
  const cartCount = useSelector(({ order }) => order?.lineItems?.length);
  const alert = useSelector((state) => state.alert);

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
                    <li className="nav-item Header__cart-container">
                      <Link className="nav-link" to="/cart">
                        Cart
                      </Link>

                      {cartFetched && cartCount > 0 && (
                        <span className="Header__cart-count">{cartCount}</span>
                      )}
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

      {alert.visible && (
        <AlertMessage
          visible={alert.visible}
          message={alert.message}
          alertType={alert.alertType}
          onCloseHandler={() => dispatch(hideAlert())}
        />
      )}

      {/*end nav section*/}
    </>
  );
};

export default Header;
