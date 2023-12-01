"use client";

// provider for use on in the website state
import store from "./store";
import { Provider } from "react-redux";

// children prorvider

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}
