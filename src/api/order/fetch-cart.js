import api from '../../utils/cerealsApi';

const fetchCart = (fetchData) => {
  console.log('*** The fetch data is: ', fetchData);
  const config = {
    headers: {
      'X-Spree-Order-Token': fetchData.guestToken,
      'Content-Type': 'application/json',
      'X-CSRF-Token': document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute('content')
    }
  };
  return api.get(`api/orders/${fetchData.orderNumber}`, config);
};

export default fetchCart;
