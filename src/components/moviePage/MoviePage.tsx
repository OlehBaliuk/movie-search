import React, { useEffect, useState } from 'react';
import saveIconOrange from '@images/saveIconOrange.svg';
import saveIconWhite from '@images/saveIconWhite.svg';
import { useParams } from 'react-router-dom';
import { api } from '@api';
import { useSavedList } from '@customHooks';
import { getMoviePosterPath } from '@helpers';
import { Movie, Genre } from '@interfaces';
import { Actor } from '@interfaces';
import { ActorCard } from '@sharedComponents';
import { LargeHeader, MediumHeader, FlexContainer, Span, SaveIconWrapper } from '@sharedStyledComponents';
import {
    MovieInfoContainer,
    PosterContainer,
    Poster,
    FlexContainerStyled,
    GenresContainer,
    CastContainer,
} from './MoviePage.styled';
import { CastByMovieResponse } from './types';

export const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({} as Movie);
    const [cast, setCast] = useState<Actor[]>([]);
    const { user, isSavedMovie, addMovieToSavedList, deleteMovieFromSavedList } = useSavedList(movie);

    const fetchData = async () => {
        try {
            const responseMovieInfo = (await api.getMovieInfo(id)) as Movie;
            setMovie(responseMovieInfo);

            const { cast } = (await api.getCastByMovie(id)) as CastByMovieResponse;
            setCast(cast);
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <>
            <MovieInfoContainer>
                <PosterContainer>
                    {user.email && (
                        <SaveIconWrapper>
                            <img
                                onClick={isSavedMovie ? deleteMovieFromSavedList : addMovieToSavedList}
                                src={isSavedMovie ? saveIconOrange : saveIconWhite}
                                alt="saveIcon"
                            />
                        </SaveIconWrapper>
                    )}
                    <Poster src={getMoviePosterPath(movie.poster_path)} alt="poster" />
                </PosterContainer>

                <FlexContainerStyled align="flex-start" direction="column">
                    <LargeHeader color="black">{movie.title}</LargeHeader>
                    <GenresContainer>
                        {movie.genres?.map((genre: Genre) => (
                            <Span key={genre.id}>{genre.name}</Span>
                        ))}
                    </GenresContainer>
                    <Span fontSize="20px">Rate:{movie.vote_average?.toFixed(2)}</Span>
                    <Span fontSize="20px">Description:</Span>
                    <FlexContainer textAlign="start">{movie.overview}</FlexContainer>
                </FlexContainerStyled>
            </MovieInfoContainer>

            <CastContainer>
                <MediumHeader color="black">Cast</MediumHeader>
                <FlexContainer>
                    {cast.slice(0, 9).map((actor: Actor) => (
                        <ActorCard actor={actor} key={actor.id} />
                    ))}
                </FlexContainer>
            </CastContainer>
        </>
    );
};
