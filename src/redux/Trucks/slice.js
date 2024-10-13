import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getArticlesApi } from "../../api/articles-api";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const response = await getArticlesApi();
    return response;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    filters: {
      equipment: [],
      vehicleType: [],
    },
    filteredArticles: [],
    loading: false,
    error: null,
  },
  reducers: {
    setEquipmentFilter: (state, action) => {
      state.filters.equipment = action.payload;
    },
    setVehicleTypeFilter: (state, action) => {
      state.filters.vehicleType = action.payload;
    },
    applyFilters: (state) => {
      state.filteredArticles = state.articles.filter((article) => {
        const matchesEquipment = state.filters.equipment.every((equip) =>
          article.equipment.includes(equip)
        );
        const matchesVehicleType =
          state.filters.vehicleType.length === 0 ||
          state.filters.vehicleType.includes(article.type);

        return matchesEquipment && matchesVehicleType;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
        state.filteredArticles = action.payload; // Відразу фільтруємо всі статті
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setEquipmentFilter, setVehicleTypeFilter, applyFilters } =
  articlesSlice.actions;
export const selectArticles = (state) => state.articles.filteredArticles;
export const selectLoading = (state) => state.articles.loading;

export default articlesSlice.reducer;
