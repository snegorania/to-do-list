import { createSlice } from '@reduxjs/toolkit'

// set initial state
const initialState = [
    {id: '1', title: 'First list', description: 'Some description', userId: '1'},
    {id: '2', title: 'Second list', description: 'Some description', userId: '1'},
    {id: '3', title: 'First list', description: 'Some description', userId: '2'},
    {id: '4', title: 'Second list', description: 'Some description', userId: '2'}
];

// create slice
const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        // add list
        listAdded(state, action) {
            state.push(action.payload);
        }
    }
});


export const { listAdded } = listsSlice.actions;

export default listsSlice.reducer;