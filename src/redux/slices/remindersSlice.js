import { createSlice } from '@reduxjs/toolkit';

const remindersSlice = createSlice({
    name: 'reminders',
    initialState: {
        items: []
    },
    reducers: {
        addReminder: (state, action) => {
            state.items.push(action.payload);
        }
    }
});

export const { addReminder } = remindersSlice.actions;
export default remindersSlice.reducer;
