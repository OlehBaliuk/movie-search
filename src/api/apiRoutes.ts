const apiRoutes = {
    getPopularMovies: () => 'movie/popular',
    getTopMovies: () => 'movie/top_rated',
    getUpcomingMovies: () => 'movie/upcoming',
    getNowInTheCinema: () => 'movie/now_playing',
    getSearchMovies: () => 'search/movie',
    getMovieInfo: (id: string | undefined) => `movie/${id}`,
    getCastByMovie: (id: string | undefined) => `movie/${id}/credits`,
};

export default apiRoutes;
