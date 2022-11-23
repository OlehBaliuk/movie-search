import { httpService } from '../services/instanceHttpService';

const api = {
    getPopularMovies: async () => {
        const response = await httpService.get('movie/popular');
        return response.data;
    },
    getTopMovies: async () => {
        const response = await httpService.get('movie/top_rated');
        return response.data;
    },
    getUpcomingMovies: async () => {
        const response = await httpService.get('movie/upcoming');
        return response.data;
    },
    getNowInTheCinema: async () => {
        const response = await httpService.get('movie/now_playing', {
            region: 'UA',
        });
        return response.data;
    },
};

export default api;
