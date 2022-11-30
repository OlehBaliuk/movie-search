import apiRoutes from './apiRoutes';
import { httpService } from '../services/instanceHttpService';

const api = {
    getPopularMovies: async () => {
        const response = await httpService.get(apiRoutes.getPopularMovies());
        return response.data;
    },
    getTopMovies: async () => {
        const response = await httpService.get(apiRoutes.getTopMovies());
        return response.data;
    },
    getUpcomingMovies: async () => {
        const response = await httpService.get(apiRoutes.getUpcomingMovies());
        return response.data;
    },
    getNowInTheCinema: async () => {
        const response = await httpService.get(apiRoutes.getNowInTheCinema(), {
            region: 'UA',
        });
        return response.data;
    },
    getSearchMovie: async name => {
        const response = await httpService.get(apiRoutes.getSearchMovie(), { query: name });
        return response.data;
    },
    getMovieInfo: async id => {
        const response = await httpService.get(apiRoutes.getMovieInfo(id));
        return response.data;
    },
    getCastByMovie: async id => {
        const response = await httpService.get(apiRoutes.getCastByMovie(id));
        return response.data;
    },
};

export default api;
