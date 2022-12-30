import React from 'react';
import loading from '@images/loading.svg';
import './index.scss';

export const Preloader = () => {
    return <img className="preloader" src={loading} alt="preloader" />;
};
