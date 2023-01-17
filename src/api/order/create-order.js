import api from '../../utils/cerealsApi';

const createOrder = (cartData) => {
  return api.post('api/orders', cartData);
};

export default createOrder;
