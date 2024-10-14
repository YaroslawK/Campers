import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      AC: false,
      transmission: "manual",
      kitchen: false,
      TV: false,
      bathroom: false,
      form: "",
      location: "",
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setLocationFilter: (state, action) => {
      state.filters.location = action.payload;
    },
  },
});

export const { setLocationFilter, setFilters } = filtersSlice.actions;

export const selectFilters = (state) => state.filters.filters;

export default filtersSlice.reducer;
