import React from 'react';

import './WeightOption.scss';

import classnames from 'classnames';

const WeightOption = ({ index, title, inStock, onWeightOptionSelected }) => {
  return (
    <div
      className={classnames('swatch-element s available', {
        'WeightOption__out-of-stock': !inStock
      })}
      onClick={() => inStock && onWeightOptionSelected(index)}
    >
      <input
        className="swatchInput"
        id={`swatch-${index}`}
        type="radio"
        name="option-1"
        value={title}
        disabled={!inStock}
      />
      <label
        className="swatchLbl medium rectangle"
        htmlFor={`swatch-${index}`}
        title={title}
      >
        {title}
      </label>
    </div>
  );
};

export default WeightOption;
