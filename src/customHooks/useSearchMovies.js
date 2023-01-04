import React, { useEffect, useState } from 'react';
import { api } from '@api';

export const useSearchMovies = (searchValue, setSearchMovies) => {
    const [isFetching, setIsFetching] = useState(true);

    async function getSearchMovies(searchValue, setSearchMovies) {
        if (!searchValue) return;
        try {
            const response = await api.getSearchMovies(searchValue);
            setSearchMovies(response.results);
            setIsFetching(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSearchMovies(searchValue, setSearchMovies);
    }, [searchValue]);

    return { isFetching };
};
