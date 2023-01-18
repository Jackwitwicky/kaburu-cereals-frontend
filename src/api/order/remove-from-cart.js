import api from '../../utils/cerealsApi';

const removeFromCart = (deleteRequest) => {
  console.log('*** The update data is: ', deleteRequest);
  const config = {
    headers: {
      'X-Spree-Order-Token': deleteRequest.guestToken,
      'Content-Type': 'application/json'
    }
  };
  return api.delete(
    `api/orders/${deleteRequest.orderNumber}/line_items/${deleteRequest.lineItemId}`,
    config
  );
};

export default removeFromCart;
