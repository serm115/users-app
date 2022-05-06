import { createContext, useEffect, useReducer } from 'react'

const UsersStateContext = createContext()
const UsersDispatchContext = createContext()

const initialState = {
    users: []
}

const localState = JSON.parse(localStorage.getItem('users'))

export function UsersProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, localState || initialState)

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