import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000"
})


export const showWishLists = async () => {
  const resp = await api.get('/wishlists');
  return resp.data
}


export const showOnewishLists = async (id) => {
  const resp = await api.get(`/wishlists/${id}`);
  return resp.data
}


export const showItems = async (id) => {
  const resp = await api.get(`/wishlists/${id}/items`);
  return resp.data
}

export const showOneItem = async (id,itemId) => {
  const resp = await api.get(`/wishlists/${id}/items/${itemId}`);
  return resp.data
}