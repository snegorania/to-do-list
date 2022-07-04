import { createSlice } from "@reduxjs/toolkit";

// set initial state
const initialState = [
    {id: '1', userName: 'Alex', password: 'gggg'},
    {id: '2', userName: 'root', password: 'root'}
];

// create user slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // add user
        userAdded(state, action) {
            state.push(action.payload);
        }
    }
});

export const { userAdded } = usersSlice.actions;
export const { userFind } = usersSlice.actions;

export default usersSlice.reducer;