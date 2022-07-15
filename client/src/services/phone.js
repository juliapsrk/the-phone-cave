import api from './api';

export const listPhones = () => {
  return api.get('/phones').then((response) => response.data);
};

export const phoneDetail = (id) => {
  return api.get(`/phones/${id}`).then((response) => response.data);
};
