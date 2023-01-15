import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';
import { MovieCard } from '@sharedComponents';
import { LargeHeader, FlexContainer } from '@sharedStyledComponents';

export const SavedMoviesPage = () => {
    const { movies } = useSelector(state => state.savedMovies);
    const moviesToMap = [...movies];

    return (
        <>
            <LargeHeader>Saved movies</LargeHeader>
            <FlexContainer padding="0 15%">
                {moviesToMap
                    .sort((prev, next) => next.savedTimestamp - prev.savedTimestamp)
                    .map(movie => (
                        <Link to={`${ROUTES.movie}/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))}
            </FlexContainer>
        </>
    );
};
