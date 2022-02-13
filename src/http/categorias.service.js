import http from "./http-common";

export const getAllCategories = () => {
  return http.get("/categorias");
}

export const getGategory = (id) => {
  return http.get(`/categorias/${id}`);
}
export const createCategory = (data) => {
  return http.post("/categorias", data);
}
export const updateCategory = (id, data) => {
  return http.put(`/categorias/${id}`, data);
}
export const deleteCategory = (id) => {
  return http.delete(`/categorias/${id}`);
}
// deleteAll() {
//   return http.delete(`/categorias`);
// }
// findByTitle(title) {
//   return http.get(`/categorias?title=${title}`);
// }