import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesForCategory } from '@api';
import { ROUTES, CATEGORIES } from '@constants';
import { Movie } from '@interfaces';
import { Slider, MovieCard } from '@sharedComponents';
import { ErrorModal } from '@sharedComponents';
import { LargeHeader } from '@sharedStyledComponents';
import { MoviesContainer } from './MainPage.styled';

export const MainPage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    const getInitialData = async () => {
        try {
            await getMoviesForCategory(CATEGORIES.popular, setPopularMovies);
            await getMoviesForCategory(CATEGORIES.top, setTopMovies);
        } catch (error: any) {
            setError(error);
            setModalActive(true);
        }
    };

    useEffect(() => {
        getInitialData();
    }, []);

    return (
        <>
            <MoviesContainer>
                <LargeHeader>Top</LargeHeader>
                <Slider>
                    {topMovies?.map((movie: Movie) => (
                        <Link to={`${ROUTES.movie}/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))}
                </Slider>
            </MoviesContainer>

            <MoviesContainer>
                <LargeHeader>Popular</LargeHeader>
                <Slider>
                    {popularMovies?.map((movie: Movie) => (
                        <Link to={`${ROUTES.movie}/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))}
                </Slider>
            </MoviesContainer>
            <ErrorModal active={modalActive} setActive={setModalActive} message={error?.message} />
        </>
    );
};
