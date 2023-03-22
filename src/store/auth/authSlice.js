//creo este archivo  Slice  para proveer al store de un reducer valido
//2do arcivo que creo despues de ponere le <provider stor={store} en la parte mas alta de la aplicacion.
//sniped redux-slice
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    //status al cargar la aplicacion
    status: "not-authenticated", //'not-authenticated', 'authenticated','cheking'
    uid: null,
    email: null,
    dispalyName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    //pongo el payload como objeto

    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.dispalyName = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;
    },
    ///verificar si esta authenticado o de loading
    //La amando al LoginPage  y al thunks con dispatch
    chekinghCredential: (state) => {
      console.log("jj", state);
      state.status = "cheking";
    },
  },
});

// Action creators functions  are generated for each case reducer function
//acciones  que se disparan en los reducer - lo mando todo al store.js
export const { login, logout, chekinghCredential } = authSlice.actions;
