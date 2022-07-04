import { createSlice } from "@reduxjs/toolkit";

// slice for current user
const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        id: null
    },
    reducers: {
        // action currentUserSet add id of user to use it to form lists of tasks for current user
        currentUserSet(state, action) { 
            state.id = action.payload.id;
        },
        currentUserLogOut(state) {
            state.id = null;
        }
    }
});

export const { currentUserSet } = currentUserSlice.actions;
export const { currentUserLogOut } = currentUserSlice.actions;

export default currentUserSlice.reducer;