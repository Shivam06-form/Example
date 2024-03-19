"use client"
import { configureStore, createSlice } from '@reduxjs/toolkit'


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


/////////////////////// FAVORITE LIST SLICE//////////////////

const FavoriteSlice = createSlice({
    name: "FAVORITE",
    initialState: { List: [] },
    reducers: {
        //// Add To Favorite //////////
        AddToFav(state, action) {
            const { item } = action.payload
            state.List = state.List.concat(item)
            window.localStorage.setItem('FAVORITE', JSON.stringify(state.List))
        },
        ////// Get All Favorites ///////
        getAllFav(state) {
            const getItems = window.localStorage.getItem("FAVORITE")
            if (getItems) {
                state.List = (JSON.parse(getItems))
            }
        },

        /////// Remove Favourite /////////
        RemoveFav(state, action) {
            let List = []
            const { ID } = action.payload
            console.log(ID)
            List = state.List.filter((fav) => fav.id !== ID)
            state.List = List
            window.localStorage.setItem('FAVORITE', JSON.stringify(state.List))
        }
    }
})


///////////////////////////////////////////////

const store = () => {
    return configureStore({
        reducer: {
            Search: SearchBar.reducer,
            ///  OVerlay Reducer  ///
            Overlay: OverlaySlicer.reducer,
            Favorite: FavoriteSlice.reducer
        }
    })
}

export const SEARCH = SearchBar.actions
///  OVerlay Actions  ///
export const OVERLAY = OverlaySlicer.actions

//// ADD TO FAV //////////
export const FAVORITE = FavoriteSlice.actions

export default store

