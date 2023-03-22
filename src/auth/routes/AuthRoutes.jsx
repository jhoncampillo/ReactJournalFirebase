import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      {/*login-register*/}
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      {/*Cualquier otra ruta que no sea login o register va a*/}
      <Route path="/*" element={<Navigate to="/" />} />

      {/*JournalApp*/}
    </Routes>
  );
};
