import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
});

api.interceptors.request.use(async config => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU3NDg2NTg1NX0.zOm2QLcQfM3Dzv3G52ltQEsBoq0CBXW96gaEZmH7kmk';
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
