import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

// Add more API functions as needed
