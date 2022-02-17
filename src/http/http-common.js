import axios from 'axios';

const url = "https://conejito-commerce-api.herokuapp.com/api";

export default axios.create({
  baseURL: "https://conejito-commerce-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});