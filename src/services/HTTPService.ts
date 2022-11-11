import axios from 'axios';

class HTTPService {
    static async request(url: string, method: any, params: any, data?: any): Promise<any> {
        try {
            const response = await axios({ url, method, params, data });

            return response;
        } catch (e) {
            console.log(e);
        }
        return null;
    }

    static async get(url: string, method: string, params: any) {
        const response = await this.request(url, method, params);

        return response;
    }

    static async post(url: string, method: string, params: any, data: any) {
        const response = await this.request(url, method, params, data);

        return response;
    }

    static async delete(url: string, method: string, params: any) {
        const response = await this.request(url, method, params);

        return response;
    }
}

export default HTTPService;
