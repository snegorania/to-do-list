import { configureStore } from '@reduxjs/toolkit'
import listsReducer from '../fitures/lists/listsSlice'
import tasksReducer from '../fitures/taasks/tasksSlice'
import usersReducer from '../fitures/users/usersSlice'
import currentUserReducer from '../fitures/users/currentUserSlice'


export default configureStore({
    reducer: {
        lists: listsReducer,
        tasks: tasksReducer,
        users: usersReducer,
        currentUser: currentUserReducer
    }
})