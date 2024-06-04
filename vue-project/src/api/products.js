import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getAllProducts = (page, limit) => {
  return apiClient.get(`/products?page=${page}&limit=${limit}`);
};

export const getProductDetail = (id) => {
  return apiClient.get(`/products/${id}`);
};

export const createProduct = (product) => {
  return apiClient.post('/products', product);
};

export const updateProduct = (id, product) => {
  return apiClient.put(`/products/${id}`, product);
};

export const deleteProduct = (id) => {
  return apiClient.delete(`/products/${id}`);
};
