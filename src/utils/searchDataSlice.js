import { createSlice } from "@reduxjs/toolkit";

const searchDataSlice = createSlice({
  name: "searchData",
  initialState: {
    searchData: {},
  },
  reducers: {
    searchDataAddToStore: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { searchDataAddToStore } = searchDataSlice.actions;
export default searchDataSlice.reducer;
