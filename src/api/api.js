import { httpService } from '@services';
import apiRoutes from './apiRoutes';

export const api = {
    getPopularMovies: async page => {
        const response = await httpService.get(apiRoutes.getPopularMovies(), { page });

        return response.data;
    },
    getTopMovies: async page => {
        const response = await httpService.get(apiRoutes.getTopMovies(), { page });

        return response.data;
    },
    getUpcomingMovies: async page => {
        const response = await httpService.get(apiRoutes.getUpcomingMovies(), { page });

        return response.data;
    },
    getNowInTheCinema: async page => {
        const response = await httpService.get(apiRoutes.getNowInTheCinema(), {
            region: 'UA',
            page,
        });

        return response.data;
    },
    getSearchMovies: async name => {
        const response = await httpService.get(apiRoutes.getSearchMovies(), { query: name });

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
