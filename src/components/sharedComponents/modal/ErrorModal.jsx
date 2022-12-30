import React from 'react';
import { useAuthErrorHandler } from '@customHooks';
import './index.scss';

export const ErrorModal = ({ active, setActive, message }) => {
    const { displayCustomAuthError } = useAuthErrorHandler();

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                {displayCustomAuthError(message)}
            </div>
        </div>
    );
};
