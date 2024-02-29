import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://fit-me-three.vercel.app/api/v1/exercises";
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

export const createExercise = createAsyncThunk(
  "exercises/createExercise",
  async (exerciseData) => {
    const res = await axios.post(API, exerciseData);
    return res.data;
  }
);

export const deleteExercise = createAsyncThunk(
  "delete/deleteExercise",
  async (exerciseId) => {
    console.log(exerciseId)
    const res = await axios.delete(`${API}/${exerciseId}`);
    if (res.status === 200) {
      return { ...res.data, id: exerciseId };
    }
    console.log(res)
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
      state.exercises = action.payload.exercises;
    });
    builder.addCase(fetchExercises.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
    builder.addCase(createExercise.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createExercise.fulfilled, (state, action) => {
      state.isLoading = false;
      state.exercises.push(action.payload.exercise);
    });
    builder.addCase(createExercise.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
    builder.addCase(deleteExercise.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteExercise.fulfilled, (state, action) => {
      state.isLoading = false;
      state.exercises = state.exercises.filter(
        (ele) => ele._id !== action.payload.id
      );
    });
    builder.addCase(deleteExercise.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
  },
});

export const exerciseReducer = exerciseSlice.reducer;
