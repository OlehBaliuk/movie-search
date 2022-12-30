import React from 'react';
import './index.scss';

export const Button = ({ title, handleClick, isDisable }) => {
    return (
        <button className="form__button-submit" type="submit" onClick={e => handleClick(e)} disabled={isDisable}>
            {title}
        </button>
    );
};
