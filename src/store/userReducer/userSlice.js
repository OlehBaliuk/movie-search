import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    uid: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserToState: (state, action) => {
            state.email = action.payload.email;
            state.uid = action.payload.uid;
        },
        clearUserState: state => {
            state.email = '';
            state.uid = '';
        },
    },
});

export const { addUserToState, clearUserState } = userSlice.actions;

export default userSlice.reducer;
