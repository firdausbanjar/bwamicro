import axios from 'axios';
import errorHandler from './errorHandler';
import config from '../config';

const instance = axios.create({
    baseURL: config.api.baseUrl,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
