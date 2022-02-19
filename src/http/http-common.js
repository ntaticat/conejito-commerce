import axios from 'axios';

export default axios.create({
  baseURL: "https://conejito-commerce-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});