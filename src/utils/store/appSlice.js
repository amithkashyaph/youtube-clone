import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideNavOpen: true,
  },
  reducers: {
    toggleSideNav: (state) => {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
    closeMenu: (state) => {
      state.isSideNavOpen = false;
    },
  },
});

export const { toggleSideNav, closeMenu } = appSlice.actions;

export default appSlice.reducer;
