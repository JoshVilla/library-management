import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {}, // ✅ Change from null to an empty object
};

const studentInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    logoutUser: (state) => {
      state.userInfo = {};
    },
  },
});

export const { setUserInfo, logoutUser } = studentInfoSlice.actions;
export default studentInfoSlice.reducer;
