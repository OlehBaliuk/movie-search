export const getRequestPayload = movie => {
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
