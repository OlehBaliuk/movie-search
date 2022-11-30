import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContextData } from '../../context/index';
import MovieCard from '../movieCard/MovieCard';
import CustomSlider from '../sharedComponents/slider/CustomSlider';
import './index.scss';

const MainPage = () => {
    const { popularMovies, topMovies } = useContextData();

    return (
        <main>
            <div className="movies-wrapper">
                <h1 className="category-title">Top</h1>
                <CustomSlider>
                    {topMovies?.map(movie => (
                        <Link to={`/movie/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))}
                </CustomSlider>
            </div>

            <div className="movies-wrapper">
                <h1 className="category-title">Popular</h1>
                <CustomSlider>
                    {popularMovies?.map(movie => (
                        <Link to={`/movie/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))}
                </CustomSlider>
            </div>
        </main>
    );
};

export default MainPage;
