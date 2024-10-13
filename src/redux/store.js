import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./Trucks/slice";
import truckReducer from "./Trucks/truckSlice";
import detailsReducer from "./Trucks/detailsSlice";
import filtersReducer from "./Trucks/filtersSlice";

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    truck: truckReducer,
    details: detailsReducer,
    filters: filtersReducer,
  },
});

export default store;
