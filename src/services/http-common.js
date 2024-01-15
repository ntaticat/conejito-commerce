import axios from 'axios';
import { apiUrl } from '../utils/environments';

export default axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    "Content-type": "application/json"
  }
});