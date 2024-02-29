import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "";
const initialState = {
  exercises: [],
  isLoading: false,
  error: "",
};
export const fetchExercises = createAsyncThunk(
  "exercises/fetchExercises",
  async () => {
    const res = await axios.get(API);
    return res.data;
  }
);

const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExercises.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchExercises.fulfilled, (state, action) => {
      state.isLoading = false;
      state.exercises = action.payload;
    });
    builder.addCase(fetchExercises.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
  },
});

export const exerciseReducer = exerciseSlice.reducer;
