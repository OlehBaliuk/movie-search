import React, { FC } from 'react';
import { getMoviePosterPath } from '@helpers';
import { Actor } from '@interfaces';
import { ActorCardContainer, ActorCardImage, ActorCardText, ActorCardCharacter } from './actorCard.style';
import { ActorCardProps } from './types';

export const ActorCard: FC<ActorCardProps> = ({ actor }) => {
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
