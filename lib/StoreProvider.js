"use client"

import React from 'react'
import { Provider } from 'react-redux' 
import { useRef } from 'react'
import store, { SEARCH } from './store'


export default function StoreProvider({ children }) {
    let storeRef = useRef(null)
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = store()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}