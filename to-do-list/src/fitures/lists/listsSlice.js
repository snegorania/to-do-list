import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchLists = createAsyncThunk(
    'lists/fetchLists',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('http://localhost:8080/api/lists');
            if (!response.ok) {
                throw new Error('Server error');
            }
            const data = response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.massage);
        }
        
    }
);

export const addList = createAsyncThunk(
    'users/addList',
    async function(list, {rejectWithValue, dispatch}) {
        try {
            const response = fetch('http://localhost:8080/api/lists', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(list) 
            })

            console.log(response);

            if (!response.ok) {
                throw new Error('Server error');
            }

            const data = response.json();
            console.log(data);
            dispatch(listAdded({
                id: data.id,
                title: data.title,
                description: data.description,
                userId: data.userId
            }));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

// create slice
const listsSlice = createSlice({
    name: 'lists',
    initialState: {
        lists: [],
        status: null,
        error: null
    },
    reducers: {
        // add list
        listAdded(state, action) {
            state.lists.push({
                id:action.payload.id,
                title:action.payload.title,
                description:action.payload.description,
                userId:action.payload.userId
            });
        }
    },
    extraReducers: {
        [fetchLists.pending]: (state) => { 
            state.status = 'loading';
            state.error = null;
        },
        [fetchLists.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.lists = action.payload;
        },
        [fetchLists.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [addList.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});


export const { listAdded } = listsSlice.actions;

export default listsSlice.reducer;