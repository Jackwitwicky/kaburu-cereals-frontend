import React from 'react';

import './AlertMessage.scss';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';

const DEFAULT_DURATION = 4000;

const AlertMessage = ({ visible, message, alertType, onCloseHandler }) => {
  const dispatch = useDispatch;
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (visible) {
        onCloseHandler();
      }
    }, DEFAULT_DURATION);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [dispatch, visible]);

  if (!visible) {
    return null;
  }

  return (
    <div className="AlertMessage">
      <span
        className={classnames('AlertMessage__container', {
          [`bg-${alertType}`]: true
        })}
      >
        {message}
      </span>
    </div>
  );
};

export default AlertMessage;
