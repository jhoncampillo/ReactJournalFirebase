//Thunks para procesos asincronos
//la envio a l apagina qye tine el submit
import {
  singInWhitGoogle,
  registerUserWhithEmailpassword,
} from "../firebase/providers";
import { chekinghCredential, logout, login } from "./auth/authSlice";

export const chekingAuthentication = (email, password) => {
  return async (dispatch) => {
    //despacho del slice
    dispatch(chekinghCredential());
  };
};

//creo otro thunks para google
export const startGooogleSingIn = () => {
  return async (dispatch) => {
    dispatch(chekinghCredential());

    const result = singInWhitGoogle();
    console.log(result);

    //evaluo si el result.ok del provider es true - involo funcion logout del slice
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login());
  };
};

//creo thuks para crear el usuario
export const startCreatingUserWhitEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(chekinghCredential());
    const resp = registerUserWhithEmailpassword({
      email,
      password,
      displayName,
    });
    console.log(resp);
  };
};
