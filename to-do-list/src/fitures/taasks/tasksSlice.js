import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'First task', description: 'Some description', listId: '1'},
    {id: '2', title: 'Second task', description: 'Some description', listId: '1'},
    {id: '3', title: 'First task', description: 'Some description', listId: '2'},
    {id: '4', title: 'Second task', description: 'Some description', listId: '2'},
];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskAdded(state, action) {
            state.push(action.payload);
        }
    }
})

export const {taskAdded} = tasksSlice.actions;

export default tasksSlice.reducer;