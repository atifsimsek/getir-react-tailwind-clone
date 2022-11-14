import { configureStore } from "@reduxjs/toolkit"
import {modalReducer} from "./modalSlice"

const store = configureStore(
    {
        reducer: {
            modalReducer
        }
    }
)




export default store