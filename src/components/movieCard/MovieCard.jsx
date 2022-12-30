import React from 'react';
import saveIconOrange from '@images/saveIconOrange.svg';
import saveIconWhite from '@images/saveIconWhite.svg';
import { useSavedList } from '@customHooks';
import { getMoviePosterPath } from '@helpers';
import './index.scss';

export const MovieCard = ({ movie }) => {
    const { user, isSavedMovie, addMovieToSavedList, deleteMovieFromSavedList } = useSavedList(movie);

    return (
        <div className="movie-card">
            {user && (
                <div className="save-icon-wrapper">
                    <img
                        onClick={isSavedMovie ? deleteMovieFromSavedList : addMovieToSavedList}
                        className="save-icon"
                        src={isSavedMovie ? saveIconOrange : saveIconWhite}
                        alt="saveIcon"
                    />
                </div>
            )}
            <img className="movie-card__poster" src={getMoviePosterPath(movie.poster_path)} alt="poster" />
            <div className="movie-card__text-wrapper">
                <strong className="movie-card__title">{movie.title}</strong>
                <p className="movie-card__release-year">{movie.release_date?.slice(0, 4)}</p>
            </div>
        </div>
    );
};
