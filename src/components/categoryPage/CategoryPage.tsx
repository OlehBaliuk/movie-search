import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';
import { Movie } from '@interfaces';
import { Paginate, MovieCard } from '@sharedComponents';
import { LargeHeader, FlexContainer } from '@sharedStyledComponents';
import useCategoryPageState from './useCategoryPageState';

export const CategoryPage = () => {
    const { fixCategoryTitle, pageQuery, movies, pageCount, handlePageClick } = useCategoryPageState();

    return (
        <>
            <LargeHeader>Films by "{fixCategoryTitle}" category</LargeHeader>
            <FlexContainer padding="0 15%">
                {movies?.map((movie: Movie) => (
                    <Link to={`${ROUTES.movie}/${movie.id}`} key={movie.id}>
                        <MovieCard movie={movie} />
                    </Link>
                ))}
            </FlexContainer>
            <Paginate pageQuery={pageQuery} pageCount={pageCount} handlePageClick={handlePageClick} />
        </>
    );
};
