import React from 'react';
import loading from '@images/loading.svg';
import { PreloaderContainer } from './Preloader.styled';

export const Preloader = () => {
    return <PreloaderContainer src={loading} alt="preloader" />;
};
