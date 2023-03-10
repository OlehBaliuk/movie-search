import Slider from 'react-slick';
import styled from 'styled-components';

export const StyledSlider = styled(Slider)`
    .slick-dots li button:before {
        color: white;
        opacity: 1;
        font-size: 14px;
    }

    .slick-dots li.slick-active button:before {
        opacity: 1;
        color: orange;
    }

    .slick-slider {
        height: 350px;
    }

    .slick-prev:before,
    .slick-next:before {
        font-size: 30px;
    }

    .slick-dots {
        bottom: -20px;
    }

    .slick-arrow.slick-prev,
    .slick-arrow.slick-next {
        background-color: orange;
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }
    .slick-prev {
        left: -40px;
    }

    .slick-next {
        right: -40px;
    }
`;
