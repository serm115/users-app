import { useContext } from 'react'
import { UsersStateContext } from '../Contexts/users'

export function useUsersState() {
    const context = useContext(UsersStateContext)

    if (!context) {
        throw Error('useUserState must be used with UsersProvider')
    }

    return context
}