import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import settings from './sliderSettings';

export const CustomSlider = ({ children }) => {
    return <Slider {...settings}>{children}</Slider>;
};
