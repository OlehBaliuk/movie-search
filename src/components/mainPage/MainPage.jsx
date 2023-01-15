import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesForCategory } from '@api';
import { ROUTES, CATEGORIES } from '@constants';
import { Slider, MovieCard } from '@sharedComponents';
import { LargeHeader } from '@sharedStyledComponents';
import { MoviesContainer } from './MainPage.styled';

export const MainPage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);

    const getInitialData = () => {
        try {
            getMoviesForCategory(CATEGORIES.popular, setPopularMovies);
            getMoviesForCategory(CATEGORIES.top, setTopMovies);
        } catch (error) {
            console.log(error);
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
                    {topMovies?.map(movie => (
                        <Link to={`${ROUTES.movie}/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))}
                </Slider>
            </MoviesContainer>

            <MoviesContainer>
                <LargeHeader>Popular</LargeHeader>
                <Slider>
                    {popularMovies?.map(movie => (
                        <Link to={`${ROUTES.movie}/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))}
                </Slider>
            </MoviesContainer>
        </>
    );
};
