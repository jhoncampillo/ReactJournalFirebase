import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
//import { Google } from "@mui/icons-material";
import { useForm } from "../../hooks";
import { AuthLayout } from "../layout/AuthLayout";
import { startCreatingUserWhitEmailPassword } from "../../store";

//para que al cargar el form de registro no salgan las alertas
//por que los input estan en blanco
//implemento un useState
const formData = {
  displayName: "",
  email: "",
  password: "",
};

//Objeto de valicion de campos
//creo el objeto y se lo envio al useForm como parametro
const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener una @"],
  password: [
    (value) => value.length >= 6,
    "el password debe de tener mas de 6 letras  ",
  ],
  displayName: [(value) => value.length >= 4, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  //useDispatch para el registro
  const dispatch = useDispatch();

  //state para errores del form
  const [formSubmitted, setFormSubmitted] = useState(false);

  //formulario cin useForm
  //utlizo el Validator para validar los campos
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  console.log(displayNameValid);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWhitEmailPassword(formState));
  };

  return (
    //comovoy a tener dos limk lo trabajo con alias
    // Grid  Se importa de materia y es un <div></div> pero con mas  propiedades.
    //El SX={{primary.main es el que se define en el appTheme- purpleTheme.js}}

    // Utilizo el Layout y le mando al children el parametro  title="Login- tambien como Props mandatary
    <AuthLayout title="Crear Cuenta">
      {/* <h1>FormValid{isFormValid ? " Valido" : " Incorrecto"} </h1> */}
      {/* Formulario*/}
      <form onSubmit={onSubmit}>
        <Grid container>
          {/* xs = cantidad de columnas en que se divide la pantalla en etste caso 12 coluumnas md={6} para pantallas medianas */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Tu nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="jjcs@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contrasena"
              type="password"
              placeholder="Contrasena"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit">
                Crear Cuenta
              </Button>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid> */}
          </Grid>
          <Grid container direction="row" justifyContent="end">
            {/* Importo el LInk de material  con el component ={RouterLink} llamo el Link del Router- Me lleva  a la pantalla de registro*/}
            <Typography sx={{ mr: 1 }}>Ya tienes Cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/Login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

// INSTALO VALIDATOR NPM PARA VALIDAR LOS CAMPOS DEL FORMULARIO.
// LA CONFIGURACION POR DEFECTO UNICIAL RESPONSIVE DE MATERIAL ES MOBILE FIRST sm={} md={} xl={} manejo de pantallas.
