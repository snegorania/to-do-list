import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = [
    {id: '1', title: 'First task', description: 'Some description', listId: '1'},
    {id: '2', title: 'Second task', description: 'Some description', listId: '1'},
    {id: '3', title: 'First task', description: 'Some description', listId: '2'},
    {id: '4', title: 'Second task', description: 'Some description', listId: '2'},
];

// create tasksSlice
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        // add task
        taskAdded(state, action) {
            state.push(action.payload);
        },

        // delete done task
        taskDone(state, action) {
            const i = state.indexOf(action.payload);
            state.splice(i, 1);
        }
    }
})

export const {taskAdded} = tasksSlice.actions;
export const {taskDone} = tasksSlice.actions;

export default tasksSlice.reducer;