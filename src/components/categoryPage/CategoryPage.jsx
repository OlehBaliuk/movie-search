import React from 'react';
import { Link } from 'react-router-dom';
import { MovieCard } from '@components';
import { ROUTES } from '@constants';
import { Paginate } from '@sharedComponents';
import useCategoryPageState from './useCategoryPageState';
import './index.scss';

export const CategoryPage = () => {
    const { fixCategoryTitle, pageQuery, movies, pageCount, handlePageClick } = useCategoryPageState();

    return (
        <main>
            <div className="main-content-wrapper">
                <h1>Films by "{fixCategoryTitle}" category</h1>
                <div className="category-movies">
                    {movies?.map(movie => (
                        <Link to={`${ROUTES.movie}/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))}
                </div>
                <Paginate pageQuery={pageQuery} pageCount={pageCount} handlePageClick={handlePageClick} />
            </div>
        </main>
    );
};
