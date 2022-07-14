import api from './api';

export const listPhones = () =>
  api.get('/phones').then((response) => response.data);

// export const loadPhone = () =>
//   api.get(`/phone/${id}`).then((response) => response.data);
