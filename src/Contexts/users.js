import { createContext, useEffect, useReducer } from 'react'
import { usersReducer } from '../Reducers/users'

export const UsersStateContext = createContext()
export const UsersDispatchContext = createContext()

const initialState = {
    users: [
        {
            id: 1,
            firstName: '',
            lastName: '',
            isAdmin: false,
            jobTitle: '',
            email: '',
            mobile: '',
            joinDate: ''
        }
    ]
}

const localState = JSON.parse(localStorage.getItem('users'))

export function UsersProvider({ children }) {
    const [state, dispatch] = useReducer(usersReducer, localState || initialState)

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(state))
    }, [state])

    return (
        <UsersStateContext.Provider value={state} >
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider >
    )
}