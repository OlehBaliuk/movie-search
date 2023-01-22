import { httpService } from '@services';
import apiRoutes from './apiRoutes';

export const api = {
    getPopularMovies: async (page: number) => {
        const response = await httpService.get(apiRoutes.getPopularMovies(), {
            page,
        });

        return response.data;
    },
    getTopMovies: async (page: number) => {
        const response = await httpService.get(apiRoutes.getTopMovies(), {
            page,
        });

        return response.data;
    },
    getUpcomingMovies: async (page: number) => {
        const response = await httpService.get(apiRoutes.getUpcomingMovies(), {
            page,
        });

        return response.data;
    },
    getNowInTheCinema: async (page: number) => {
        const response = await httpService.get(apiRoutes.getNowInTheCinema(), {
            region: 'UA',
            page,
        });

        return response.data;
    },
    getSearchMovies: async (name: string) => {
        const response = await httpService.get(apiRoutes.getSearchMovies(), {
            query: name,
        });

        return response.data;
    },
    getMovieInfo: async (id: string | undefined) => {
        const response = await httpService.get(apiRoutes.getMovieInfo(id));

        return response.data;
    },
    getCastByMovie: async (id: string | undefined) => {
        const response = await httpService.get(apiRoutes.getCastByMovie(id));

        return response.data;
    },
};
