import axios from '../utils/axios'

export function getDetail(id) {
  return axios.get(`/goods/detail/${id}`);
}

export function getCategory() {
  return axios.get('/category/getData');
}

export function search(params) {
  return axios.get('/search', { params });
}

