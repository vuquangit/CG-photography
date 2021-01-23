/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CurrentDisplayState = {
  color: string;
};

const initialState: CurrentDisplayState = {
  color: "#000",
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateColorHeader(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
  },
});

export const { updateColorHeader } = profile.actions;

export default profile.reducer;
