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
        clearSavedMoviesState: state => {
            state.movies = [];
        },
    },
});

export const { addSavedMoviesToState, clearSavedMoviesState } = savedMoviesSlice.actions;

export default savedMoviesSlice.reducer;
