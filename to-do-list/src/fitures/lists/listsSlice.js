import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: '1', title: 'First list', description: 'Some description', userId: '1'},
    {id: '2', title: 'Second list', description: 'Some description', userId: '1'}
];

const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        listAdded(state, action) {
            state.push(action.payload);
        }
    }
});


export const { listAdded } = listsSlice.actions;

export default listsSlice.reducer;