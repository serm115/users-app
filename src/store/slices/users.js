import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsers: (state, action) => {
            state.list = action.payload
        },
        addUser: (state, action) => {
            state.list.push(action.payload)
        },
    },
})

export const { fetchUsers, addUser } = usersSlice.actions

export default usersSlice.reducer
