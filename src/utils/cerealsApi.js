import axios from 'axios';
import snakeReplacer from '../utils/snakeReplacer';
import camelReplacer from '../utils/camelReplacer';

const buildHeader = () => {
  const header = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };

  if (typeof document !== 'undefined') {
    header['X-CSRF-Token'] = document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute('content');
  }

  return header;
};

const api = axios.create({
  headers: buildHeader(),
  baseURL: 'http://localhost:3001/',
  transformRequest: [
    function (data) {
      if (data) {
        return JSON.stringify(data, snakeReplacer);
      }
      return data;
    }
  ],
  transformResponse: [
    function (data) {
      if (data) {
        return JSON.parse(data, camelReplacer);
      }
      return data;
    }
  ]
});

api.interceptors.request.use(function (config) {
  if (typeof window.axiosActive === 'number') {
    window.axiosActive += 1;
  } else {
    window.axiosActive = 1;
  }
  return config;
});

api.interceptors.response.use(
  function (response) {
    if (typeof window.axiosActive === 'number') {
      window.axiosActive -= 1;
    } else {
      window.axiosActive = 0;
    }
    return response;
  },
  (err) => {
    if (typeof window.axiosActive === 'number') {
      window.axiosActive -= 1;
    } else {
      window.axiosActive = 0;
    }
    throw err;
  }
);

export default api;
