import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { MovieCard } from '@components';
import { ROUTES } from '@constants';
import { useSearchMovies } from '@customHooks';
import './index.scss';

const SearchMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('filmName');
    useSearchMovies(searchQuery, setMovies);

    return (
        <main>
            <div className="main-content-wrapper">
                <h1>Search result by {`"${searchQuery}"`}</h1>
                <div className="search-result">
                    {movies?.map(movie => (
                        <Link to={`/${ROUTES.movie}/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default SearchMoviesPage;
