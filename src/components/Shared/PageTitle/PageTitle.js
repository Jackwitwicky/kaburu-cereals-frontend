import React from 'react';

import './PageTitle.scss';

const PageTitle = ({ title }) => {
  return (
    <div className="PageTitle">
      <div className="page section-header text-center">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width PageTitle__title">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
