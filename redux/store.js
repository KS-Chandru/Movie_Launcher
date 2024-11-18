import { configureStore } from "@reduxjs/toolkit";
import { UserRegistration } from "./slice/UserRegistrationslice";

const Store = configureStore({
  reducer: {
    Users: UserRegistration,
  },
});
export default Store;
