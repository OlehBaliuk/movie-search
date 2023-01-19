import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import { ROUTES, SEARCH_INPUT_DISPLAY_BY_ROUTE } from '@constants';
import { useSearchMovies } from '@customHooks';

const useHeaderState = () => {
    const user = useSelector(state => state.user);
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

    const redirectToCategoryPage = (e, category) => {
        e.preventDefault();
        navigate({
            pathname: ROUTES.category,
            search: `${createSearchParams({ category: category })}`,
        });
    };

    return {
        isSearchInputVisible,
        user,
        searchMovies,
        isFetching,
        searchValue,
        handleChange,
        redirectToSearchPage,
        redirectToCategoryPage,
    };
};

export default useHeaderState;
