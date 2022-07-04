// imports configure store function and reducers for lists, tasks, users, current user of app   
import { configureStore } from '@reduxjs/toolkit'
import listsReducer from '../fitures/lists/listsSlice'
import tasksReducer from '../fitures/taasks/tasksSlice'
import usersReducer from '../fitures/users/usersSlice'
import currentUserReducer from '../fitures/users/currentUserSlice'

// configures store end export it
export default configureStore({
    reducer: {
        lists: listsReducer,
        tasks: tasksReducer,
        users: usersReducer,
        currentUser: currentUserReducer
    }
})