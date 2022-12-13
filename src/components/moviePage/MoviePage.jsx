import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import './index.scss';
import { getMoviePosterPath } from '../../helpers/urlPathMoviePoster';
import ActorCard from '../actorCard/ActorCard';

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);

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
        <>
            <div className="movie-info">
                <img className="movie-info__poster" src={getMoviePosterPath(movie.poster_path)} alt="poster" />
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
                    {cast.slice(0, 10).map(actor => (
                        <ActorCard actor={actor} key={actor.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MoviePage;
