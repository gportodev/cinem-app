import axios from 'axios';

const api = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=925eba28&',
});

export default api;
