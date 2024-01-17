import { createSlice } from "@reduxjs/toolkit";
const ModeSlice = createSlice({
  name: "mode",
  initialState: { theme: false },
  reducers: {
    ChangeMode: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { ChangeMode } = ModeSlice.actions;
export default ModeSlice.reducer;
