import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStudent } from "../../service/types";

interface StudentState {
  userInfo: IStudent | {}; // ✅ Change from null to an empty object
}

const initialState: StudentState = {
  userInfo: {},
};

const studentInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IStudent>) => {
      state.userInfo = action.payload;
    },
    logoutUser: (state) => {
      state.userInfo = {};
    },
  },
});

export const { setUserInfo, logoutUser } = studentInfoSlice.actions;
export default studentInfoSlice.reducer;
