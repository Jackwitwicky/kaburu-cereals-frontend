import api from '../../utils/cerealsApi';

const updateCart = (updateRequest) => {
  console.log('*** The update data is: ', updateRequest);
  const config = {
    headers: {
      'X-Spree-Order-Token': updateRequest.guestToken,
      'Content-Type': 'application/json'
    }
  };
  return api.put(
    `api/orders/${updateRequest.orderNumber}`,
    updateRequest.data,
    config
  );
};

export default updateCart;
