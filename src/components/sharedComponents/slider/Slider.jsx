import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledSlider } from './Slider.styled';
import settings from './sliderSettings';

export const Slider = ({ children }) => {
    return <StyledSlider {...settings}>{children}</StyledSlider>;
};
