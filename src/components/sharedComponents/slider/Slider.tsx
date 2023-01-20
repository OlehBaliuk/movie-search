import React, { FC } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledSlider } from './Slider.styled';
import settings from './sliderSettings';
import { SliderProps } from './types';

export const Slider: FC<SliderProps> = ({ children }) => {
    return <StyledSlider {...settings}>{children}</StyledSlider>;
};
