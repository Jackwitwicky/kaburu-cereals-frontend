import api from '../../utils/cerealsApi';

const updateCartItemQuantity = (updateRequest) => {
  console.log('*** The update cart data is: ', updateRequest);
  const config = {
    headers: {
      'X-Spree-Order-Token': updateRequest.guestToken,
      'Content-Type': 'application/json'
    }
  };
  return api.put(
    `api/orders/${updateRequest.orderNumber}/line_items/${updateRequest.lineItemId}`,
    updateRequest.data,
    config
  );
};

export default updateCartItemQuantity;
