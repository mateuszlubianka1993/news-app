import axios from 'axios';

// https://newsapi.org/

export default axios.create({
    baseURL: 'https://newsapi.org/v2/',
});
