import React, { createContext, useState, useEffect, useContext, useMemo } from 'react';
import getMoviesForCategory from '../helpers/getMoviesForCategory';

const ContextMovies = createContext();

const ContextMoviesProvider = props => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        getMoviesForCategory('Popular', setPopularMovies);
        getMoviesForCategory('Top', setTopMovies);
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