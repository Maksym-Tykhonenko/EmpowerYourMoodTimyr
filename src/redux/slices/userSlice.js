// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nickname: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setNickname: (state, action) => {
            state.nickname = action.payload;
        },
    },
});

export const { setNickname } = userSlice.actions;

export default userSlice.reducer;
