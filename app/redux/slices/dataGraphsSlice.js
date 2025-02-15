import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataGraph: {}, // ✅ Keep it as an object
};

const dataGraphsSlice = createSlice({
  name: "graph", // ✅ Match the key in rootReducer
  initialState,
  reducers: {
    setDataGraph: (state, action) => {
      state.dataGraph = action.payload; // ✅ Fix incorrect key
    },
  },
});

export const { setDataGraph } = dataGraphsSlice.actions;
export default dataGraphsSlice.reducer;
