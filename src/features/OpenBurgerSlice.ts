import { createSlice } from "@reduxjs/toolkit";

export interface burgerProps {
  openFrame: boolean;
}

const initialState: burgerProps = {
  openFrame: false,
};

const OpenBurgerSlice = createSlice({
  name: "openFrame",
  initialState,
  reducers: {
    setOpenFrame: (state) => {
      state.openFrame = !state.openFrame;
    },
  },
});

export const { setOpenFrame } = OpenBurgerSlice.actions;

export default OpenBurgerSlice.reducer;
