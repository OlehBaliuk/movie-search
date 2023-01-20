import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ROUTES } from '@constants';
import { useSearchMovies } from '@customHooks';
import { Movie } from '@interfaces';
import { MovieCard } from '@sharedComponents';
import { LargeHeader, FlexContainer } from '@sharedStyledComponents';
import { StyledCustomInput } from './SearchMoviesPage.styled';

export const SearchMoviesPage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('filmName');
    const [value, setValue] = useState(searchQuery);
    useSearchMovies(value, setMovies);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                {movies?.map((movie: Movie) => (
                    <Link to={`${ROUTES.movie}/${movie.id}`} key={movie.id}>
                        <MovieCard movie={movie} />
                    </Link>
                ))}
            </FlexContainer>
        </>
    );
};
