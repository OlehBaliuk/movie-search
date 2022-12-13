import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useSearchMovies from '../../customHooks/useSearchMovies';
import MovieCard from '../movieCard/MovieCard';
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
                        <Link to={`/movie/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default SearchMoviesPage;
