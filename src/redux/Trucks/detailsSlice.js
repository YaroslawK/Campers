import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    truckDetails: null,
  },
  reducers: {
    setTruckDetails: (state, action) => {
      state.truckDetails = action.payload;
    },
    clearTruckDetails: (state) => {
      state.truckDetails = null;
    },
  },
});

export const { setTruckDetails, clearTruckDetails } = detailsSlice.actions;

export const selectTruckDetails = (state) => state.details.truckDetails;

export default detailsSlice.reducer;
