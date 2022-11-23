import React, { createContext, useState, useEffect, useContext, useMemo } from 'react';
import api from '../api/api';

const getCategories = (category, setMovies) => {
    const fetchData = async getMoviesForCategory => {
        const response = await getMoviesForCategory();

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

const ContextData = createContext();

const ContextDataProvider = props => {
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState('Popular');

    useEffect(() => {
        getCategories(category, setMovies);
    }, [category]);

    const value = useMemo(() => ({ movies, setCategory, category }), [movies]);

    return (
        <ContextData.Provider
            value={value}
            {...props}
        />
    );
};

const useContextData = () => {
    const context = useContext(ContextData);

    if (context === undefined) {
        throw new Error('useUserContext was used outside of its Provider');
    }

    return context;
};

export { useContextData, ContextDataProvider };
