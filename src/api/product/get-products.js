import api from '../../utils/cerealsApi';

const getProducts = () => {
  return api.get('api/products');
};

export default getProducts;
