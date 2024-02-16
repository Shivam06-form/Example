"use client"

import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'


const SearchBar = createSlice({
    name: "SEARCH",
    initialState: { searchTexts: null },
    reducers: {
        Search(state, action = { TEXT: null }) {
            const { TEXT } = action.payload
            state.searchTexts = TEXT
        }
    }
})


const store = () => {
    return configureStore({
        reducer: {
            Search: SearchBar.reducer,
        }
    })
}

export const SEARCH = SearchBar.actions


export default store

