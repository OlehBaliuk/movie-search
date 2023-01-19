import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import { ROUTES, SEARCH_INPUT_DISPLAY_BY_ROUTE } from '@constants';
import { useSearchMovies } from '@customHooks';
import { Movie } from '@interfaces';

const useHeaderState = () => {
    const user = useSelector((state: any) => state.user);
    const [searchValue, setSearchValue] = useState('');
    const [searchMovies, setSearchMovies] = useState<Movie[] | null>(null);
    const { isFetching } = useSearchMovies(searchValue, setSearchMovies);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        return setSearchValue('');
    }, [location.pathname, location.search]);

    const checkDisplayInputSearch = (route: string): boolean => {
        return SEARCH_INPUT_DISPLAY_BY_ROUTE[route] ?? true;
    };

    const isSearchInputVisible = checkDisplayInputSearch(location.pathname);

    const redirectToSearchPage = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (searchValue) {
            navigate({
                pathname: ROUTES.search,
                search: `${createSearchParams({ filmName: searchValue })}`,
            });
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const redirectToCategoryPage = (e: FormEvent<HTMLInputElement>, category: string) => {
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
