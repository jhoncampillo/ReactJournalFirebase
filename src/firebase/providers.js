import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

//funcion de authhenticacion con google
//envio al thunks esta funcion
export const singInWhitGoogle = async () => {
  try {
    //pide el auth y el  provider - estancia y el proveddor del popup
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    //console.log({ credentials });
    //Este resultado sale de la respuesta del proveedor de google
    // const user = result.user;
    console.log(result.user);
    //lo desestructuro
    const { displayName, email, PhotoURL, uid } = result.user;

    return {
      ok: true,
      //user info
      displayName,
      email,
      PhotoURL,
      uid,
    };
  } catch (error) {
    console.log(error);
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    //const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    return {
      ok: false,
      errorMessage,
    };
  }
};

//proveedor para grabar el usuario
export const registerUserWhithEmailpassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    console.log({ email, password, displayName });
    //llamo la funcion del firebase/aut
    const respuesta = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, PhotoURL } = respuesta.user;
    console.log(respuesta);

    //TODO ACTUALIZAR EL USUARIO EN FIREBASE*////////////////

    return {
      ok: true,
      uid,
      PhotoURL,
      email,
      displayName,
    };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};
