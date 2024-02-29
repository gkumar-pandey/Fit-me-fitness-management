import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  targets: [],
  isLoading: false,
  error: "",
};
const targetSlice = createSlice({
  name: "target",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const targetReducer = targetSlice.reducer;
