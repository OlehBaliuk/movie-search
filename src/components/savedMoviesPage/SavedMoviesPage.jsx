import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';
import { MovieCard } from '@sharedComponents';
import { ErrorModal } from '@sharedComponents';
import { LargeHeader, FlexContainer } from '@sharedStyledComponents';

export const SavedMoviesPage = () => {
    const { movies } = useSelector(state => state.savedMovies);
    const error = useSelector(state => state.savedMovies.errorMessage);
    const [modalActive, setModalActive] = useState();

    useEffect(() => {
        if (error) {
            setModalActive(true);
        }
    }, []);

    return (
        <>
            <LargeHeader>Saved movies</LargeHeader>
            <FlexContainer padding="0 15%">
                {movies?.map(movie => (
                    <Link to={`${ROUTES.movie}/${movie.id}`} key={movie.id}>
                        <MovieCard movie={movie} />
                    </Link>
                ))}
            </FlexContainer>
            {error && <ErrorModal active={modalActive} setActive={setModalActive} message={error} />}
        </>
    );
};
