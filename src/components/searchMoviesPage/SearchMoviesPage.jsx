import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { MovieCard } from '@components';
import { ROUTES } from '@constants';
import { useSearchMovies } from '@customHooks';
import { Input } from '@sharedComponents';
import './index.scss';

export const SearchMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('filmName');
    const [value, setValue] = useState(searchQuery);
    useSearchMovies(value, setMovies);

    const handleSubmit = e => {
        e.preventDefault();
    };

    const handleChange = e => {
        setValue(e.target.value);
        setSearchParams({ filmName: e.target.value });
    };

    return (
        <main>
            <div className="main-content-wrapper">
                <Input
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    value={value}
                    type="search"
                    placeholder="Search..."
                />
                <h1>Search result</h1>
                <div className="search-result">
                    {movies?.map(movie => (
                        <Link to={`${ROUTES.movie}/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};
