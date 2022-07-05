import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('http://localhost:8080/api/user');
            console.log(response);
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

export const addUser = createAsyncThunk(
    'users/addUser',
    async function(user, {rejectWithValue, dispatch}) {
        try {
            const response = fetch('http://localhost:8080/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(user) 
            })

            if (!response.ok) {
                throw new Error('Server error');
            }

            const data = response.json();
            dispatch(userAdded({...data}));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

// create user slice
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users : [],
        status: null,
        error: null
    },
    reducers: {
        // add user
        userAdded(state, action) {
            state.users.push(action.payload);
        }
    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.users = action.payload;
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [addUser.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

export const { userAdded } = usersSlice.actions;
export const { userFind } = usersSlice.actions;

export default usersSlice.reducer;