import axios from 'axios';

const http = axios.create({
  baseURL: "https://conejito-commerce-api.herokuapp.com/api",
  headers: {
    "Content-type": "multipart/form-data"
  }
});

export const createImage = (data) => {
  const {img} = data;

  const formData = new FormData();
  formData.append("img", img);

  return http.post("/uploads/image", formData);
}


// export const deleteImage = (id) => {
//   return http.delete(`/uploads`);
// }