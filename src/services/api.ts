import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    timeout: 10000
});

export default instance;