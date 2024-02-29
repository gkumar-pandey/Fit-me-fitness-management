import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://fit-me-three.vercel.app/api/v1/targets";

const initialState = {
  targets: [],
  isLoading: false,
  error: "",
};

export const fetchTargets = createAsyncThunk(
  "targets/fetchTargets",
  async () => {
    try {
      const res = await axios.get(API);
      return res.data;
    } catch (error) {
      console.error("Error fetching targets:", error);
      throw error;
    }
  }
);

export const createTarget = createAsyncThunk(
  "targets/createTarget",
  async (targetData) => {
    try {
      const res = await axios.post(API, targetData);
      return res.data;
    } catch (error) {
      console.error("Error creating target:", error);
      throw error;
    }
  }
);

export const deleteTarget = createAsyncThunk(
  "targets/deleteTarget",
  async (targetId) => {
    try {
      const res = await axios.delete(`${API}/${targetId}`);
      if (res.status === 200) {
        return { ...res.data, id: targetId };
      }

      return res.data;
    } catch (error) {
      console.error("Error deleting target:", error);
      throw error;
    }
  }
);

const targetSlice = createSlice({
  name: "target",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTargets.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchTargets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.targets = action.payload.targets;
    });
    builder.addCase(fetchTargets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Error fetching targets";
    });
    builder.addCase(createTarget.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(createTarget.fulfilled, (state, action) => {
      state.isLoading = false;
      state.targets.push(action.payload.target);
    });
    builder.addCase(createTarget.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Error creating target";
    });
    builder.addCase(deleteTarget.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(deleteTarget.fulfilled, (state, action) => {
      state.isLoading = false;
      state.targets = state.targets.filter(
        (target) => target.id !== action.payload.id
      );
    });
    builder.addCase(deleteTarget.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Error deleting target";
    });
  },
});

export const targetReducer = targetSlice.reducer;
