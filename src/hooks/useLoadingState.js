import { useContext } from 'react'
import { UsersStateContext } from '../contexts/users'

export function useLoadingState() {
    const context = useContext(UsersStateContext)

    if (!context) {
        throw Error('useLoadingState must be used with UsersProvider')
    }

    return context.loading
}
