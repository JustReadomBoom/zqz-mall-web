import axios from '../utils/axios'

export function addAddress(params) {
  return axios.post('/address/addAddress', params);
}

export function EditAddress(params) {
  return axios.post('/address/updateAddress', params);
}

export function DeleteAddress(id) {
  return axios.delete(`/address/${id}`);
}

export function getDefaultAddress() {
  return axios.get('/address/default');
}

export function getAddressList() {
  return axios.get('/address/getAddressList', { pageNumber: 1, pageSize: 1000 })
}

export function getAddressDetail(id) {
  return axios.get(`/address/getByAddressId/${id}`)
}


