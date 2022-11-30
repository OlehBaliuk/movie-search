import React from 'react';
import './index.scss';
import { getMoviePosterPath } from '../../helpers/urlPathMoviePoster';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img className="movie-card__poster" src={getMoviePosterPath(movie.poster_path)} alt="poster" />
            <div className="movie-card__text-wrapper">
                <strong className="movie-card__title">{movie.title}</strong>
                <p className="movie-card__release-year">{movie.release_date.slice(0, 4)}</p>
            </div>
        </div>
    );
};

export default MovieCard;
