import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const UserRegistrationslice = createSlice({
  name: "User",
  initialState,
  reducers: {
    UserRegistration(state, action) {
      state.push(action.payload);
    },
  },
});

export const { UserRegistration } = UserRegistrationslice.actions;
export default UserRegistrationslice;
