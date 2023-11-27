import { configureStore } from "@reduxjs/toolkit";
import OpenBurgerSlice, { BurgerProps } from "./OpenBurgerSlice";

//store for be every state here

const store = configureStore({
  reducer: {
    openFrame: OpenBurgerSlice,
  },
});

// use openFrame for states

export type RootState = {
  openFrame: BurgerProps;
};

export default store;
