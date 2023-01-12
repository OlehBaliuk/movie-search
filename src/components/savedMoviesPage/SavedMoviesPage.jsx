import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';
import { useSavedMovies } from '@context';
import { MovieCard } from '@sharedComponents';
import { LargeHeader, FlexContainer } from '@sharedStyledComponents';

export const SavedMoviesPage = () => {
    const { savedMovies } = useSavedMovies();

    return (
        <>
            <LargeHeader>Saved movies</LargeHeader>
            <FlexContainer padding="0 15%">
                {savedMovies
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
