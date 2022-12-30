import { httpService } from '@services';
import apiRoutes from './apiRoutes';

export const api = {
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
