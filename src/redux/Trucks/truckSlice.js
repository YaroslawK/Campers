import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getArticlesApi } from "../../api/articles-api";

export const fetchTruckDetails = createAsyncThunk(
  "truck/fetchTruckDetails",
  async (id) => {
    const response = await getArticlesApi();
    return response.find((article) => article.id === id);
  }
);

const truckSlice = createSlice({
  name: "truck",
  initialState: {
    truckDetails: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTruckDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTruckDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.truckDetails = action.payload;
      })
      .addCase(fetchTruckDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectTruckDetails = (state) => state.truck.truckDetails;
export const selectLoading = (state) => state.truck.loading;

export default truckSlice.reducer;
