import React from 'react';
import { CUSTOM_ERRORS, DEFAULT_ERROR_MESSAGE } from '@constants';

export const useAuthErrorHandler = () => {
    const displayCustomAuthError = (errorMessage: string) => {
        return (CUSTOM_ERRORS as any)[errorMessage] ?? DEFAULT_ERROR_MESSAGE;
    };

    return { displayCustomAuthError };
};
