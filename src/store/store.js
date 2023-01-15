import { configureStore } from '@reduxjs/toolkit';
import savedMoviesReducer from './savedMoviesReducer/savedMoviesSlice';
import userReducer from './userReducer/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        savedMovies: savedMoviesReducer,
    },
});
