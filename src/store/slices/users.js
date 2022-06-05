import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
})

export default usersSlice.reducer
