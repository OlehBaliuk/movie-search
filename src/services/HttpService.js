import axios from 'axios';

export default class HttpService {
    constructor() {
        const instance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

        instance.interceptors.request.use(
            config => this.requestHandler(config),
            error => {
                return Promise.reject(error);
            },
        );

        instance.interceptors.response.use(
            response => this.responseHandler(response),
            error => this.errorHandler(error),
        );

        this.instance = instance;
    }

    requestHandler = config => {
        config.params = { ...config.params, api_key: process.env.REACT_APP_API_KEY };

        return config;
    };

    responseHandler = response => {
        return response;
    };

    errorHandler = error => {
        if (error.response) {
            return error.response.data;
        } else {
            return Promise.reject(error);
        }
    };

    get(url, params) {
        return this.instance({ method: 'get', url, params });
    }

    post(url, params, data) {
        return this.instance({ method: 'post', url, params, data });
    }

    delete(url, params) {
        return this.instance({ method: 'delete', url, params });
    }
}
