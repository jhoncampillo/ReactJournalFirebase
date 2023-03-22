//creo el store para implementar redux-tookit - react redux
//Es el Primer archivo que se crear despues de instalar : npm install @reduxjs/toolkit react-redux
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
