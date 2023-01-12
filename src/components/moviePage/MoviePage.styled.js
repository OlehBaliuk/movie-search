import styled from 'styled-components';
import { FlexContainer, SaveIconWrapper, Span } from '@sharedStyledComponents';

const MovieInfoContainer = styled.div`
    background-color: rgb(243, 193, 112);
    display: flex;
    position: relative;
    padding: 30px;
    min-height: 50vh;

    @media (max-width: 600px) {
        display: block;
        text-align: -webkit-center;
    }

    ${SaveIconWrapper} {
        width: 225px;
    }
`;

const PosterContainer = styled.div`
    &:hover ${SaveIconWrapper} {
        display: block;

        img {
            display: block !important;
        }
    }
`;

const Poster = styled.img`
    max-width: none;
    height: 350px;
    width: 225px;
    border-radius: 10px;
    object-fit: cover;
`;

const FlexContainerStyled = styled(FlexContainer)`
    padding-left: 30px;
    max-width: 85%;
`;

const GenresContainer = styled.div`
    ${Span}:not(:last-child):after {
        content: ', ';
        margin-right: 5px;
    }
`;

const CastContainer = styled.div`
    padding: 30px;
    background: white;
    min-height: calc(50vh - 50px);
`;

export { MovieInfoContainer, PosterContainer, Poster, FlexContainerStyled, GenresContainer, CastContainer };
