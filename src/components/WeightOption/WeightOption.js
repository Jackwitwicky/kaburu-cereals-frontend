import React from 'react';

import './WeightOption.scss';

import classnames from 'classnames';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

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
        id={`variant-out-of-stock${index}`}
        data-tooltip-content="Item is out of stock"
      >
        {title}
      </label>

      {!inStock && <Tooltip anchorId={`variant-out-of-stock${index}`} />}
    </div>
  );
};

export default WeightOption;
