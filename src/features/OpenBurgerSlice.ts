// burger menu state for open it
import { createSlice } from "@reduxjs/toolkit";

//redux state
export interface BurgerProps {
  openFrame: boolean;
}

const initialState: BurgerProps = {
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
