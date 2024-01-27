import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: null,
  },
  reducers: {
    cacheResults: (state, action) => {
      state[action.payload.searchTerm] = action.payload.searchResult;
    },
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { cacheResults, updateSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
