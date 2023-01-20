import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export default class HttpService {
    instance: AxiosInstance;
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

    requestHandler = (config: AxiosRequestConfig) => {
        config.params = { ...config.params, api_key: process.env.REACT_APP_API_KEY };

        return config;
    };

    responseHandler = (response: AxiosResponse) => {
        return response;
    };

    errorHandler = (error: AxiosError) => {
        if (error.response) {
            return error.response.data;
        } else {
            return Promise.reject(error);
        }
    };

    get(url: string, params: any) {
        return this.instance({ method: 'get', url, params });
    }

    post(url: string, params: any, data: any) {
        return this.instance({ method: 'post', url, params, data });
    }

    delete(url: string, params: any) {
        return this.instance({ method: 'delete', url, params });
    }
}
