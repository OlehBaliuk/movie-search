import React, { useEffect, useContext, useState } from 'react';
import { useContextData } from '../../context/index';
import './index.scss';

const MainPage = () => {
    const { movies, category } = useContextData();

    return (
        <>
            <h3>{category}</h3>
            {movies?.map(movie => (
                <div key={movie.id}>{movie.title}</div>
            ))}
        </>
    );
};

export default MainPage;
