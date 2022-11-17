import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({

    name: "modal",
    initialState: {
        modals: [],
    },
    reducers: {
        append: (state, action) => {
            state.modals = [...state.modals, action.payload]

        },
        destroy: state => {
            document.body.style.overflow = "auto"
            state.modals = []

        },

    },

})






export const modalReducer = modalSlice.reducer
export const { append, destroy} = modalSlice.actions
