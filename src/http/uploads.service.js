import axios from 'axios';
import { apiUrl } from '../utils/environments';

const http = axios.create({
  baseURL: `${apiUrl}/api`,
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