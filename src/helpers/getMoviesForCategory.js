import { api } from '@api';
import { MAX_PAGE_COUNT } from '@constants';

export const getMoviesForCategory = (category, setMovies, page, setPageCount) => {
    const fetchData = async getMovies => {
        const response = await getMovies(page);
        setMovies(response.results);

        if (setPageCount) {
            const totalPages = response.total_pages > MAX_PAGE_COUNT ? MAX_PAGE_COUNT : response.total_pages;
            setPageCount(totalPages);
        }
    };

    const categories = {
        popular: () => fetchData(api.getPopularMovies),
        top: () => fetchData(api.getTopMovies),
        upcoming: () => fetchData(api.getUpcomingMovies),
        'now-in-the-cinema': () => fetchData(api.getNowInTheCinema),
    };

    return categories[category]();
};
