import api from '../../utils/cerealsApi';

const getProducts = (onSuccess, onFailure) => {
  console.log('*** Method called to get products request: ');
  api
    .get('api/products')
    .then((response) => {
      console.log('*** The response is: ', response);
      onSuccess(
        response.data
      );
    })
    .catch((error) => {
      console.log('*** The error is: ', error);
      onFailure(error.response.data.error);
    });
};

export default getProducts;
