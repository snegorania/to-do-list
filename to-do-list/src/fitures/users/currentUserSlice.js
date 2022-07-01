import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        id: '1'
    },
    reducers: {
        currentUserSetted(state, action) {
            state.id = action.payload
        }
    }
});

export const { currentUserSetted } = currentUserSlice.actions;

export default currentUserSlice.reducer;