import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        id: '2',
        userName: '1',
        password: '1'
    },
    reducers: {
        currentUserSetted(state, action) {
            state = action.payload
        }
    }
});

export const { currentUserSetted } = currentUserSlice.actions;

export default currentUserSlice.reducer;