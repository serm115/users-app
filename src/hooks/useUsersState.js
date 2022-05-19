import { useContext } from 'react'
import { AppStateContext } from '../contexts/app'

export function useUsersState() {
    const context = useContext(AppStateContext)

    if (!context) {
        throw Error('useUserState must be used with AppProvider')
    }

    return context.users
}
