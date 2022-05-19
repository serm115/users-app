import { createContext, useReducer } from 'react'
import { usersReducer } from '../reducers/users'

export const UsersStateContext = createContext()
export const UsersDispatchContext = createContext()

const initialState = {
    users: [],
    loading: false,
}

export function UsersProvider({ children }) {
    const [state, dispatch] = useReducer(usersReducer, initialState)

    return (
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    )
}
