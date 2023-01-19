import React from 'react';
import { CUSTOM_ERRORS, DEFAULT_ERROR_MESSAGE } from '@constants';

export const useAuthErrorHandler = () => {
    const displayCustomAuthError = errorMessage => {
        return CUSTOM_ERRORS[errorMessage] ?? DEFAULT_ERROR_MESSAGE;
    };

    return { displayCustomAuthError };
};
