import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('http://localhost:8080/api/task');
            if (!response.ok) {
                throw new Error('Server error');
            }
            const data = response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addTask = createAsyncThunk(
    'users/addTask',
    async function(task, {rejectWithValue, dispatch}) {
        try {
            const response = fetch('http://localhost:8080/api/task', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(task) 
            })

            if (!response.ok) {
                throw new Error('Server error');
            }

            const data = response.json();
            dispatch(taskAdded({...data}));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const deleteTask = createAsyncThunk(
    'users/deleteTask',
    async function(task, {rejectWithValue, dispatch}) {
        try {
            const response = fetch(`http://localhost:8080/api/task/${task.id}`, {
                method: 'DELETE', 
            })

            if (!response.ok) {
                throw new Error('Server error');
            }

            dispatch(taskDone({...task}));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);


// create tasksSlice
const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        status: null,
        error: null
    },
    reducers: {
        // add task
        taskAdded(state, action) {
            state.tasks.push(action.payload);
        },

        // delete done task
        taskDone(state, action) {
            const i = state.tasks.indexOf(action.payload);
            state.tasks.splice(i, 1);
        }
    },
    extraReducers: {
        [fetchTasks.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTasks.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.tasks = action.payload
        },
        [fetchTasks.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [addTask.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [deleteTask.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

export const {taskAdded} = tasksSlice.actions;
export const {taskDone} = tasksSlice.actions;

export default tasksSlice.reducer;