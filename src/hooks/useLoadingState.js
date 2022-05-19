import { useContext } from 'react'
import { AppStateContext } from '../contexts/app'

export function useLoadingState() {
    const context = useContext(AppStateContext)

    if (!context) {
        throw Error('useLoadingState must be used with AppProvider')
    }

    return context.loading
}
