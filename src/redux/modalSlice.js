import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modals: [],
    language: "tr-TR",
  },
  reducers: {
    append: (state, action) => {
      state.modals = [...state.modals, action.payload];
    },
    destroy: (state) => {
      document.body.style.overflow = "auto";
      state.modals = [];
    },
    cLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { append, destroy, cLanguage } = modalSlice.actions;
