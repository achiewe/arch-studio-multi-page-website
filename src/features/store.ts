import { configureStore } from "@reduxjs/toolkit";
import OpenBurgerSlice, { BurgerProps } from "./OpenBurgerSlice";

//store for be every state here

const store = configureStore({
  reducer: {
    openFrame: OpenBurgerSlice,
  },
});

// type of the state

export type RootState = {
  openFrame: BurgerProps;
};

export default store;
