import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ROUTES } from '@constants';
import { useSearchMovies } from '@customHooks';
import { MovieCard } from '@sharedComponents';
import { LargeHeader, FlexContainer } from '@sharedStyledComponents';
import { StyledCustomInput } from './SearchMoviesPage.styled';

export const SearchMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('filmName');
    const [value, setValue] = useState(searchQuery);
    useSearchMovies(value, setMovies);

    const handleSubmit = e => {
        e.preventDefault();
    };

    const handleChange = e => {
        setValue(e.target.value);
        setSearchParams({ filmName: e.target.value });
    };

    return (
        <>
            <StyledCustomInput
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                value={value}
                type="search"
                placeholder="Search..."
            />
            <LargeHeader>Search result</LargeHeader>
            <FlexContainer padding="0 15%">
                {movies?.map(movie => (
                    <Link to={`${ROUTES.movie}/${movie.id}`} key={movie.id}>
                        <MovieCard movie={movie} />
                    </Link>
                ))}
            </FlexContainer>
        </>
    );
};
