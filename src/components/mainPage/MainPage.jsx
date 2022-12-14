import React from 'react';
import { Link } from 'react-router-dom';
import { MovieCard } from '@components';
import { ROUTES } from '@constants';
import { useMovies } from '@context';
import { CustomSlider } from '@sharedComponents';
import './index.scss';

const MainPage = () => {
    const { popularMovies, topMovies } = useMovies();

    return (
        <main>
            <div className="main-content-wrapper">
                <div className="movies-wrapper">
                    <h1 className="category-title">Top</h1>
                    <CustomSlider>
                        {topMovies?.map(movie => (
                            <Link to={`${ROUTES.movie}/${movie.id}`} key={movie.id}>
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
            </div>
        </main>
    );
};

export default MainPage;
