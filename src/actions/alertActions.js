import { HIDE_ALERT, SHOW_ALERT } from '../actionTypes/actionTypes';

const showAlert = (data) => {
  return {
    type: SHOW_ALERT,
    data
  };
};

const hideAlert = () => {
  return {
    type: HIDE_ALERT
  };
};

export { showAlert, hideAlert };
