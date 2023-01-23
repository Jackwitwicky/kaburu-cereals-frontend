import { HIDE_ALERT, SHOW_ALERT } from '../actionTypes/actionTypes';

export const SUCCESS_ALERT_TYPE = 'success';
export const WARNING_ALERT_TYPE = 'warning';
export const ERROR_ALERT_TYPE = 'danger';

const initialState = {
  message: '',
  duration: 5000,
  visible: false,
  alertType: 'success'
};

export const alert = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      console.log('The action is: ', action);
      return {
        ...state,
        visible: true,
        message: action.data.message,
        alertType: action.data.alertType
      };
    case HIDE_ALERT:
      return {
        ...state,
        visible: false
      };
    default:
      return state;
  }
};
