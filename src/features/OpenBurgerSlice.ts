// burger menu state for open it
import { createSlice } from "@reduxjs/toolkit";

//redux state
export interface BurgerProps {
  openFrame: boolean;
}

// state which is at the beggining false
const initialState: BurgerProps = {
  openFrame: false,
};

// state becomes from false to true
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
