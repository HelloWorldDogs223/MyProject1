import { createSlice, configureStore } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { MovieData } from "../pages/Home";

const initialState = {
  data: [{}],
};

const mySlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    AddData: (state, action: PayloadAction<MovieData[]>) => {
      state.data = [...action.payload];
    },
  },
});

const store = configureStore({
  reducer: {
    data: mySlice.reducer,
  },
});

const { actions } = mySlice;

export const { AddData } = actions;
export default store;
export type RootState = ReturnType<typeof store.getState>;
