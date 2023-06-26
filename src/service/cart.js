import axios from '../utils/axios'

export function addCart(params) {
  return axios.post('/shoppingCart/addGoods', params);
}

export function modifyCart(params) {
  return axios.put('/shop-cart', params);
}

export function getCart(params) {
  return axios.get('/shoppingCart/list', { params });
}

export function getCartPage(params) {
  return axios.get('/shoppingCart/listPage', { params });
}

export function deleteCartItem(id) {
  return axios.delete(`/shop-cart/${id}`);
}

export function getByCartItemIds(params) {
  return axios.get('/shoppingCart/getShoppingCartItem', { params });
}

