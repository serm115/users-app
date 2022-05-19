import { useContext } from 'react'
import { AppDispatchContext } from '../contexts/app'

export function useAppDispatch() {
    const context = useContext(AppDispatchContext)

    if (!context) {
        throw Error('useAppDispatch must be used with AppProvider')
    }

    return context
}