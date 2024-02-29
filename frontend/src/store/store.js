import { configureStore } from "@reduxjs/toolkit";
import { exerciseReducer } from "./features/exerciseSlice";
import { targetReducer } from "./features/targetSlice";
import { foodReducer } from "./features/foodSlice";

const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
    target: targetReducer,
    food: foodReducer,
  },
});

export default store;
