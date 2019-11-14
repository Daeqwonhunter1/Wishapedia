import axios from 'axios'

const api = axios.create({
  baseURL: "https://aqueous-sierra-56876.herokuapp.com"
})


export const showWishlists = async () => {
  const resp = await api.get('/wishlists');
  return resp.data
}


export const showOnewishlists = async (wishlistId) => {
  const resp = await api.get(`/wishlists/${wishlistId}`);
  return resp.data
}


export const showItemsInWishlist = async (wishlistId) => {
  const resp = await api.get(`/wishlists/${wishlistId}/items`);
  return resp.data
}

export const showOneItemFromWishlist = async (wishlistId, itemId) => {
  const resp = await api.get(`/wishlists/${wishlistId}/items/${itemId}`);
  return resp.data
}


export const postWishlist = async (wishlistData) => {
  const resp = await api.post(`/wishlists`, wishlistData);
  return resp.data
}

export const postNewItemInWishlist = async (wishlistId, itemData) => {
  const resp = await api.post(`/wishlists/${wishlistId}/items`, itemData);
  return resp.data
}


export const UpdateOneWishlist = async (wishlistId, wishlistData) => {
  const resp = await api.put(`/wishlists/${wishlistId}`, wishlistData);
  return resp.data
}

export const UpdateOneItem = async (wishlistId, itemId, wishlistData) => {
  const resp = await api.put(`/wishlists/${wishlistId}/items/${itemId}`, wishlistData);
  return resp.data
}

export const destroyOneWishlist = async (wishlistId) => {
  const resp = await api.delete(`/wishlists/${wishlistId}`);
  return resp.data
}

export const destroyOneItem = async (wishlistId, itemId) => {
  const resp = await api.delete(`/wishlists/${wishlistId}/items/${itemId}`);
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
