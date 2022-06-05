import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/users'
import appReducer from './slices/app'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        app: appReducer,
    },
})
