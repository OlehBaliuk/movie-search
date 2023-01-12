import styled from 'styled-components';
import { FlexContainer, SaveIconWrapper } from '@sharedStyledComponents';

const MovieCardContainer = styled.div`
    padding: 15px;
    width: 190px;
    position: relative;

    ${SaveIconWrapper} {
        width: 160px;
    }

    &:hover ${SaveIconWrapper} {
        display: block;

        img {
            display: block !important;
        }
    }
`;

const Poster = styled.img`
    border-radius: 10px 10px 0 0;
    object-fit: cover;
    height: 240px;
    border-left: 1px solid white;
    border-right: 1px solid white;
    border-top: 1px solid white;
`;

const StyledFlexContainer = styled(FlexContainer)`
    border-radius: 0 0 10px 10px;
    background-color: orange;
    min-height: 80px;
    color: white;
    padding: 0 5px;
`;

const Strong = styled.strong`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export { MovieCardContainer, Poster, StyledFlexContainer, Strong };
