'use client'

import { store } from './store'
import { Provider } from 'react-redux'

export function ReduxProvider({ children }) {
    console.log("Store:", store)
    return <Provider store={store}>{children}</Provider>
}