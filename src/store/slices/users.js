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
        deleteUser: (state, action) => {
            const id = action.payload
            state.list = state.list.filter((user) => user.id !== id)
        },
        editUser: (state, action) => {
            const user = action.payload
            state.list = state.list.map((item) => (item.id !== user.id ? item : user))
        },
    },
})

export const { fetchUsers, addUser, deleteUser, editUser } = usersSlice.actions

export default usersSlice.reducer
