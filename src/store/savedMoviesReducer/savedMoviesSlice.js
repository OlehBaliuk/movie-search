import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
};

export const savedMoviesSlice = createSlice({
    name: 'savedMovies',
    initialState,
    reducers: {
        addSavedMoviesToState: (state, action) => {
            state.movies = action.payload;
        },
        saveErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
    },
});

export const { addSavedMoviesToState, saveErrorMessage } = savedMoviesSlice.actions;

export default savedMoviesSlice.reducer;
