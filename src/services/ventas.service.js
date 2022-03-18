import http from "./http-common";

export const getAllSales = () => {
  return http.get("ventas");
}

export const getSale = (id) => {
  return http.get(`ventas/${id}`);
}
export const registerSale = (data) => {
  return http.post("ventas", data);
}
