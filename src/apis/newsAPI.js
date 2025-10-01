import axios from 'axios';

// https://newsapi.org/

const newsAPI = axios.create({
  baseURL: "https://api-proxy-qw5y.onrender.com/news", 
});

export default newsAPI;
