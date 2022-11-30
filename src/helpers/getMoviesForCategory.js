import api from '../api/api';

const getMoviesForCategory = (category, setMovies) => {
    const fetchData = async getMovies => {
        const response = await getMovies();

        setMovies(response.results);
    };

    const categories = {
        Popular: () => fetchData(api.getPopularMovies),
        Top: () => fetchData(api.getTopMovies),
        Upcoming: () => fetchData(api.getUpcomingMovies),
        'Now in the cinema': () => fetchData(api.getNowInTheCinema),
    };

    return categories[category]();
};

export default getMoviesForCategory;
