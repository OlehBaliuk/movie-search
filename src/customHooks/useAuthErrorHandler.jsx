import React from 'react';
import { FIREBASE_AUTH_ERRORS, DEFAULT_AUTH_ERROR_MESSAGE } from '@constants';

export const useAuthErrorHandler = () => {
    const displayCustomAuthError = errorMessage => {
        return FIREBASE_AUTH_ERRORS[errorMessage] ?? DEFAULT_AUTH_ERROR_MESSAGE;
    };

    return { displayCustomAuthError };
};
