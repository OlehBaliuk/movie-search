import React from 'react';
import saveIconOrange from '@images/saveIconOrange.svg';
import saveIconWhite from '@images/saveIconWhite.svg';
import { useSavedList } from '@customHooks';
import { getMoviePosterPath } from '@helpers';
import { SaveIconWrapper, Span } from '@sharedStyledComponents';
import { MovieCardContainer, Poster, StyledFlexContainer, Strong } from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
    const { user, isSavedMovie, addMovieToSavedList, deleteMovieFromSavedList } = useSavedList(movie);

    return (
        <MovieCardContainer>
            {user && (
                <SaveIconWrapper>
                    <img
                        onClick={isSavedMovie ? deleteMovieFromSavedList : addMovieToSavedList}
                        src={isSavedMovie ? saveIconOrange : saveIconWhite}
                        alt="saveIcon"
                    />
                </SaveIconWrapper>
            )}
            <Poster src={getMoviePosterPath(movie.poster_path)} alt="poster" />
            <StyledFlexContainer direction="column">
                <Strong>{movie.title}</Strong>
                <Span>{movie.release_date?.slice(0, 4)}</Span>
            </StyledFlexContainer>
        </MovieCardContainer>
    );
};
