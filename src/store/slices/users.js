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
    },
})

export const { fetchUsers } = usersSlice.actions

export default usersSlice.reducer
