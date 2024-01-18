"use client";
import { Provider } from "react-redux";
import store from "./store";
import { ReactNode } from "react";

interface StoreProvider {
  children: ReactNode;
}

export default function StoreProvider({ children }: StoreProvider) {
  return <Provider store={store}>{children}</Provider>;
}
