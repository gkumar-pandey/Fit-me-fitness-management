import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foods: [],
  isLoading: false,
  error: "",
};
const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const foodReducer = foodSlice.reducer;
