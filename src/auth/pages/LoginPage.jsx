//comovoy a tener dos limk lo trabajo con alias
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { useMemo } from "react";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { chekingAuthentication, startGooogleSingIn } from "../../store/thunks";
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);

  //REACT HOOK FORM - FORMIK PARA FORMULARIOS PESADOS
  //useDispatch de redux
  const dispatch = useDispatch();
  //importo el useForm customHook para capturar los datos
  const { email, password, onInputChange, formState } = useForm({
    email: "pillojh@gmail.com",
    password: "123456",
  });

  //uso useMemo para memorizar el status  del auth
  //si estatus verdadero le sigan cheking con dependencia del status
  const isAuthenticating = useMemo(() => status === "cheking", [status]);
  //si eel sate es auntenticado
  //recibo los datos del form -- Estos accciones se majean con Tunks que manejas acciones asincronas
  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    // ejecuto el  thunks
    dispatch(chekingAuthentication());
  };

  //Boton de Google
  const onGoogleSingIn = (result) => {
    console.log("onGoogleSingIn");
    console.log(result);
    dispatch(startGooogleSingIn());
  };

  return (
    // Grid  Se importa de materia y es un <div></div> pero con mas  propiedades.
    //El SX={{primary.main es el que se define en el appTheme- purpleTheme.js}}

    // Utilizo el Layout y le mando al children el parametro  title="Login- tambien como Props mandatary
    <AuthLayout title="Login -Jhon Jairo C.S">
      {/* Formulario*/}
      <form onSubmit={onSubmit}>
        <Grid container>
          {/* xs = cantidad de columnas en que se divide la pantalla en etste caso 12 coluumnas md={6} para pantallas medianas */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email" // se necesita para que onchange funcione
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contrasena"
              type="password"
              placeholder="Contrasena"
              fullWidth
              name="password" // se necesita para que onchange funcuione - coneto el componente con el Useform
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              {/* type=submit  por que dispara el evento del formulario*/}
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                type="submit"
              >
                Login
              </Button>
              {/* type="submit" para que ejecute el onSubmit dle formulario */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                onClick={onGoogleSingIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            {/* Importo el LInk de material  con el component ={RouterLink} llamo el Link del Router- Me lleva  a la pantalla de registro*/}
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una Cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

// LA CONFIGURACION POR DEFCETO UNICIAL RESPONSIVE DE MATERIAL ES MOBILE FIRST sm={} md={} xl={} manejo de pantallas.
