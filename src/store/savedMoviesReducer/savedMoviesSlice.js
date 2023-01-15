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
    },
});

export const { addSavedMoviesToState } = savedMoviesSlice.actions;

export default savedMoviesSlice.reducer;
