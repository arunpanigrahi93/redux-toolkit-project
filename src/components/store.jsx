import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    newSubscriber: userSlice,
  },
});
