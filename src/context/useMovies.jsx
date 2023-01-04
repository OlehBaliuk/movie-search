import React, { createContext, useState, useEffect, useContext } from 'react';
import { CATEGORIES } from '@constants';
import { getMoviesForCategory } from '@helpers';

const ContextMovies = createContext();

const ContextMoviesProvider = props => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        getMoviesForCategory(CATEGORIES.popular, setPopularMovies);
        getMoviesForCategory(CATEGORIES.top, setTopMovies);
    }, []);

    const value = { popularMovies, topMovies };

    return <ContextMovies.Provider value={value} {...props} />;
};

const useMovies = () => {
    const context = useContext(ContextMovies);

    if (context === undefined) {
        throw new Error('useMovies was used outside of its Provider');
    }

    return context;
};

export { useMovies, ContextMoviesProvider };
