import React from 'react';

import './Loader.scss';

const Loader = () => {
  return (
    <div className="loading-screen">
      <div className="loader-wrap">
        <span className="loader-animation"></span>
        <div className="loading-text">
          <span className="letter">F</span>
          <span className="letter">E</span>
          <span className="letter">T</span>
          <span className="letter">C</span>
          <span className="letter">H</span>
          <span className="letter">I</span>
          <span className="letter">N</span>
          <span className="letter">G</span>

          <span className="letter">&nbsp;&nbsp;C</span>
          <span className="letter">E</span>
          <span className="letter">R</span>
          <span className="letter">E</span>
          <span className="letter">A</span>
          <span className="letter">L</span>
          <span className="letter">S</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
