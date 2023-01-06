import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  theme: "Light" | "Dark";
};

export const initialState: InitialState = {
  theme: "Light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      if (state.theme === "Light") {
        state.theme = "Dark";
        return;
      }
      if (state.theme === "Dark") {
        state.theme = "Light";
      }
    },
  },
});

export const themeReducer = themeSlice.reducer;
const switchThemeActions = themeSlice.actions;
export default switchThemeActions;
