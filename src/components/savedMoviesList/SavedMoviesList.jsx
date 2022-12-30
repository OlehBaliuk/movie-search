import React from 'react';
import { Link } from 'react-router-dom';
import { MovieCard } from '@components';
import { ROUTES } from '@constants';
import { useSavedMovies } from '@context';
import './index.scss';

export const SavedMoviesList = () => {
    const { savedMovies } = useSavedMovies();

    return (
        <main>
            <div className="main-content-wrapper">
                <h1>Saved movies</h1>
                <div className="search-result">
                    {savedMovies
                        .sort((prev, next) => next.savedTimestamp - prev.savedTimestamp)
                        .map(movie => (
                            <Link to={`${ROUTES.movie}/${movie.id}`} key={movie.id}>
                                <MovieCard movie={movie} />
                            </Link>
                        ))}
                </div>
            </div>
        </main>
    );
};
