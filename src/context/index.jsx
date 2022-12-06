import React, { createContext, useState, useEffect, useContext, useMemo } from 'react';
import getMoviesForCategory from '../helpers/getMoviesForCategory';

const ContextData = createContext();

const ContextDataProvider = props => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [category, setCategory] = useState('Popular');

    useEffect(() => {
        getMoviesForCategory('Popular', setPopularMovies);
        getMoviesForCategory('Top', setTopMovies);
    }, []);

    const value = { popularMovies, topMovies, setCategory, category };

    return <ContextData.Provider value={value} {...props} />;
};

const useContextData = () => {
    const context = useContext(ContextData);

    if (context === undefined) {
        throw new Error('useContextData was used outside of its Provider');
    }

    return context;
};

export { useContextData, ContextDataProvider };
