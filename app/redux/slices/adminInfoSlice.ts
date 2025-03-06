import { IAdmin } from "@/app/service/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AdminInfoState {
  adminInfo: IAdmin | {};
}

const initialState: AdminInfoState = {
  adminInfo: {},
};

const adminInfoSlice = createSlice({
  name: "adminInfo",
  initialState,
  reducers: {
    setAdminInfo: (state, action: PayloadAction<IAdmin>) => {
      state.adminInfo = action.payload;
    },
    logoutAdmin: (state) => {
      state.adminInfo = {};
    },
  },
});

export const { setAdminInfo, logoutAdmin } = adminInfoSlice.actions;
export default adminInfoSlice.reducer;
