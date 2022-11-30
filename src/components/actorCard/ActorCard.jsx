import React from 'react';
import './index.scss';
import { getMoviePosterPath } from '../../helpers/urlPathMoviePoster';

const ActorCard = ({ actor }) => {
    return (
        <div className="actor-card">
            <img className="actor-card__poster" src={getMoviePosterPath(actor.profile_path)} alt="poster" />
            <div className="actor-card__text">
                <strong className="actor-card__name">{actor.name}</strong>
                <p className="actor-card__character">{actor.character}</p>
            </div>
        </div>
    );
};

export default ActorCard;
