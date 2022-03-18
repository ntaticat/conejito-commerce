import http from "./http-common";

export const getAllProducts = () => {
  return http.get("productos");
}

export const getProduct = (id) => {
  return http.get(`productos/${id}`);
}
export const createProduct = (data) => {
  return http.post("productos", data);
}
export const updateProduct = (id, data) => {
  return http.put(`productos/${id}`, data);
}
export const deleteProduct = (id) => {
  return http.delete(`productos/${id}`);
}

export const addProductPrice = (productoId, priceInfo) => {
  return http.post(`productos/${productoId}/precios`, priceInfo);
}
export const removeProductPrice = (productoId, precioId) => {
  return http.delete(`productos/${productoId}/precios/${precioId}`);
}

// deleteAll() {
//   return http.delete(`/categorias`);
// }
// findByTitle(title) {
//   return http.get(`/categorias?title=${title}`);
// }