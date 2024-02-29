import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://fit-me-three.vercel.app/api/v1/foods";

const initialState = {
  foods: [],
  isLoading: false,
  error: "",
};

export const fetchFoods = createAsyncThunk("foods/fetchFoods", async () => {
  try {
    const res = await axios.get(API);
    return res.data;
  } catch (error) {
    console.error("Error fetching foods:", error);
    throw error;
  }
});

export const createFood = createAsyncThunk(
  "foods/createFood",
  async (foodData) => {
    try {
      const res = await axios.post(API, foodData);
      return res.data;
    } catch (error) {
      console.error("Error creating food:", error);
      throw error;
    }
  }
);

export const deleteFood = createAsyncThunk(
  "foods/deleteFood",
  async (foodId) => {
    try {
      const res = await axios.delete(`${API}/${foodId}`);
      if (res.status === 200) {
        return { ...res.data, id: foodId };
      }
      console.log(res);
      return res.data;
    } catch (error) {
      console.error("Error deleting food:", error);
      throw error;
    }
  }
);

const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFoods.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchFoods.fulfilled, (state, action) => {
      state.isLoading = false;
      state.foods = action.payload.foods;
    });
    builder.addCase(fetchFoods.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Error fetching foods";
    });
    builder.addCase(createFood.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(createFood.fulfilled, (state, action) => {
      state.isLoading = false;
      state.foods.push(action.payload);
    });
    builder.addCase(createFood.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Error creating food";
    });
    builder.addCase(deleteFood.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(deleteFood.fulfilled, (state, action) => {
      state.isLoading = false;
      state.foods = state.foods.filter((food) => food.id !== action.payload.id);
    });
    builder.addCase(deleteFood.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Error deleting food";
    });
  },
});

export const foodReducer = foodSlice.reducer;
