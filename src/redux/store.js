import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./Trucks/slice";
import truckReducer from "./Trucks/truckSlice";
import detailsReducer from "./Trucks/detailsSlice";

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    truck: truckReducer,
    details: detailsReducer,
  },
});

export default store;
