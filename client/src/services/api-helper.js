import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000"
})


export const showWishLists = async () => {
  const resp = await api.get('/wishlists');
  return resp.data
}


export const showOnewishLists = async (wishListId) => {
  const resp = await api.get(`/wishlists/${wishListId}`);
  return resp.data
}


export const showItemsInWishList = async (wishListId) => {
  const resp = await api.get(`/wishlists/${wishListId}/items`);
  return resp.data
}

export const showOneItemFromWishList = async (wishListId,itemId) => {
  const resp = await api.get(`/wishlists/${wishListId}/items/${itemId}`);
  return resp.data
}


export const postWishList = async (wishListData) => {
  const resp = await api.post(`/wishlists`, wishListData);
  return resp.data
}

export const postNewItemInWishlist = async (wishListId,itemData) => {
  const resp = await api.post(`/wishlists/${wishListId}/items`,itemData);
  return resp.data
}


export const UpdateOneWishList = async (wishListId,wishListData) => {
  const resp = await api.put(`/wishlists/${wishListId}`,wishListData);
  return resp.data
}

export const UpdateOneItem = async (wishListId,itemId,wishListData) => {
  const resp = await api.put(`/wishlists/${wishListId}/items/${itemId}`,wishListData);
  return resp.data
}

export const destroyOneWishList = async (wishListId) => {
  const resp = await api.delete(`/whishlists/${wishListId}`);
  return resp.data
}

export const destroyOneItem = async (wishListId,itemId) => {
  const resp = await api.delete(`/whishlists/${wishListId}/items/${itemId}`);
  return resp.data
}

// ============== Auth ================

export const loginUser = async (loginData) => {
  try {
    const resp = await api.post('/auth/login', loginData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    localStorage.setItem('authToken', resp.data.token);
    return resp.data.user
  } catch (e) {
    return { error: "invalid credentials" }
  }
}

export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/auth/register', registerData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    localStorage.setItem('authToken', resp.data.token);
    return resp.data.user
  } catch (e) {
    return { error: "invalid credentials" }
  }
}

export const verifyUser = async () => {
  const token = localStorage.authToken;
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify')
    return resp.data
  }
  return false
}
