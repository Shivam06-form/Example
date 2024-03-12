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

const OverlayInitialState = {
    openOverlay: false,
    SelectedGame: []
}


/////////// OVERLAY SETTINGS ///////////////
const OverlaySlicer = createSlice({
    name: "OVERLAY",
    initialState: OverlayInitialState,
    reducers: {
        onOpen(state, action) {
            state.openOverlay = action.payload
        },
        onClose(state, action) {
            state.openOverlay = action.payload
        },
        SelectGame(state, action) {
            // const { game } =
            state.SelectedGame = action.payload
        }
    }
})

///////////////////////////////////////////////

const store = () => {
    return configureStore({
        reducer: {
            Search: SearchBar.reducer,
            ///  OVerlay Reducer  ///
            Overlay: OverlaySlicer.reducer
        }
    })
}

export const SEARCH = SearchBar.actions
///  OVerlay Actions  ///
export const OVERLAY = OverlaySlicer.actions


export default store

