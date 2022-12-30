import React, { useEffect, useState } from 'react';
import saveIconOrange from '@images/saveIconOrange.svg';
import saveIconWhite from '@images/saveIconWhite.svg';
import { useParams } from 'react-router-dom';
import { api } from '@api';
import { ActorCard } from '@components';
import { useSavedList } from '@customHooks';
import { getMoviePosterPath } from '@helpers';
import './index.scss';

export const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);
    const { user, isSavedMovie, addMovieToSavedList, deleteMovieFromSavedList } = useSavedList(movie);

    const fetchData = async () => {
        try {
            const responseMovieInfo = await api.getMovieInfo(id);
            setMovie(responseMovieInfo);

            const responseCastByMovie = await api.getCastByMovie(id);
            setCast(responseCastByMovie.cast);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <main>
            <div className="movie-info">
                <div className="movie-info__poster-wrapper">
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
                    <img className="movie-info__poster" src={getMoviePosterPath(movie.poster_path)} alt="poster" />
                </div>

                <div className="movie-info__text-wrapper">
                    <h1 className="movie-info__title">{movie.title}</h1>
                    <div className="movie-info__genres-wrapper">
                        {movie.genres?.map(genre => (
                            <span className="movie-info__genre" key={genre.id}>
                                {genre.name}
                            </span>
                        ))}
                    </div>
                    <span className="movie-info__rate">Rate:{movie.vote_average}</span>
                    <span className="movie-info__description-title">Description:</span>
                    <div className="movie-info__description">{movie.overview}</div>
                </div>
            </div>

            <div className="cast">
                <h2 className="cast__title">Cast</h2>
                <div className="actors">
                    {cast.slice(0, 9).map(actor => (
                        <ActorCard actor={actor} key={actor.id} />
                    ))}
                </div>
            </div>
        </main>
    );
};
