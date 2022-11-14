import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({

    name: "modal",
    initialState: {
        modals: []
    },
    reducers: {
        append: (state, action) => {
            state.modals = [...state.modals, action.payload]

        },
        destroy: state => {


        },
        destroyAll: state => {
            state.modals = []

        }
    },

})






export const modalReducer = modalSlice.reducer
export const {append,destroy,destroyAll} = modalSlice.actions
