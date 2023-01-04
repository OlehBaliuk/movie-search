import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesForCategory } from '@helpers';

const useCategoryPageState = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryQuery = searchParams.get('category');
    const pageQuery = searchParams.get('page') ?? 1;
    const [movies, setMovies] = useState([]);
    const [pageCount, setPageCount] = useState();
    const fixCategoryTitle = categoryQuery.replace(/-/g, ' ');

    useEffect(() => {
        getMoviesForCategory(categoryQuery, setMovies, pageQuery, setPageCount);
    }, [categoryQuery, pageQuery]);

    const handlePageClick = e => {
        setSearchParams({ category: categoryQuery, page: e.selected + 1 });
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return { fixCategoryTitle, pageQuery, movies, pageCount, handlePageClick };
};

export default useCategoryPageState;
