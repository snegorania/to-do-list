import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', userName: 'Alex', password: 'gggg'},
    {id: '2', userName: 'root', password: 'root'}
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded(state, action) {
            state.push(action.payload);
        },
        
        userFind(state, action) {
           return state.find(el => el === action.payload.userName && el === action.payload.password);
        }
    }
});

export const { userAdded } = usersSlice.actions;
export const { userFind } = usersSlice.actions;

export default usersSlice.reducer;