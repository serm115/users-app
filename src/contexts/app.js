import { createContext, useReducer } from 'react'
import { appReducer } from '../reducers/app'

export const AppStateContext = createContext()
export const AppDispatchContext = createContext()

const initialState = {
    users: [],
    loading: false,
}

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, initialState)

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )
}
