import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user";
import { TokenService } from "../user/TokenService";
import History from "../../utils/History";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    meta: {},
    payload: {},
    error: false,
  } as User,
  reducers: {
    setLoginSuccess: (state: Draft<User>, action: PayloadAction<string>) => {
      state.payload.username = action.payload;
      state.error = false;
    },
    setLoginError: (state, action: PayloadAction<string>) => {
      state.payload = new Error(action.payload);
      state.error = true;
    },
    logoutUser: (state) => {
      TokenService.deleteJwtToken();
      state.payload = {};
      state.error = false;
      History.push(process.env.PUBLIC_URL);
    },
  },
});

export const { setLoginSuccess, setLoginError, logoutUser } = userSlice.actions;
export default userSlice.reducer;
