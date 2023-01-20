import { Movie } from '@interfaces';

export const getRequestPayload = (movie: Movie) => {
    return {
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        overview: movie.overview,
        savedTimestamp: new Date().getTime(),
    };
};
