import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';
import { useMovies } from '@context';
import { Slider, MovieCard } from '@sharedComponents';
import { LargeHeader } from '@sharedStyledComponents';
import { MoviesContainer } from './MainPage.styled';

export const MainPage = () => {
    const { popularMovies, topMovies } = useMovies();

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
