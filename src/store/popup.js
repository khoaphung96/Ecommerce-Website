import { createSlice } from "@reduxjs/toolkit";

const initiaPopuplState = { showPopup: false };

const popupSlice = createSlice({
  name: "popup",
  initialState: initiaPopuplState,
  reducers: {
    showPopup(state) {
      state.showPopup = true;
    },

    hidePopup(state) {
      state.showPopup = false;
    },
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;
