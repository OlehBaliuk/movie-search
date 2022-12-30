import React, { useEffect, useState } from 'react';
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import { ROUTES, SEARCH_INPUT_DISPLAY_BY_ROUTE } from '@constants';
import { useAuth } from '@context';
import { useSearchMovies } from '@customHooks';

const useHeaderState = () => {
    const { user, setUser } = useAuth();
    const [searchValue, setSearchValue] = useState('');
    const [searchMovies, setSearchMovies] = useState(null);
    const { isFetching } = useSearchMovies(searchValue, setSearchMovies);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        return setSearchValue('');
    }, [location.pathname, location.search]);

    const checkDisplayInputSearch = route => {
        return SEARCH_INPUT_DISPLAY_BY_ROUTE[route] ?? true;
    };

    const isSearchInputVisible = checkDisplayInputSearch(location.pathname);

    const redirectToSearchPage = e => {
        e.preventDefault();

        if (searchValue) {
            navigate({
                pathname: ROUTES.search,
                search: `${createSearchParams({ filmName: searchValue })}`,
            });
        }
    };

    const handleChange = e => {
        setSearchValue(e.target.value);
    };

    return {
        isSearchInputVisible,
        user,
        setUser,
        searchMovies,
        isFetching,
        searchValue,
        handleChange,
        redirectToSearchPage,
    };
};

export default useHeaderState;
