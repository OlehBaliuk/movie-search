import React from 'react';
import { getMoviePosterPath } from '@helpers';
import { ActorCardContainer, ActorCardImage, ActorCardText, ActorCardCharacter } from './actorCard.style';

export const ActorCard = ({ actor }) => {
    return (
        <ActorCardContainer>
            <ActorCardImage src={getMoviePosterPath(actor.profile_path)} alt="poster" />
            <ActorCardText>
                <strong>{actor.name}</strong>
                <ActorCardCharacter>{actor.character}</ActorCardCharacter>
            </ActorCardText>
        </ActorCardContainer>
    );
};
