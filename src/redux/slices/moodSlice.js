import { createSlice } from '@reduxjs/toolkit';

const moodSlice = createSlice({
    name: 'moods',
    initialState: {
        savedMoods: []
    },
    reducers: {
        saveMood: (state, action) => {
            state.savedMoods.push(action.payload);
        }
    }
});

export const { saveMood } = moodSlice.actions;
export default moodSlice.reducer;
