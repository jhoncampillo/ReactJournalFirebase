//LOS LAYOUT SIEMPRE RECIBE UN children
import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";
import React from "react";
import { NavBar, Sidebar } from "../components";

//Constante para el menu lateral y lo envio al navbar como  parametro
const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Importo el componente NavBar y le envio el paramtro para construir el sidebar */}
      {/* Navbar  drawerWidth*/}
      <NavBar drawerWidth={drawerWidth} />

      {/* Sidebar */}
      <Sidebar drawerWidth={drawerWidth} />
      <Box
        component="main"
        //   stylo y pading global
        sx={{ flexGrow: 1, p: 3 }}
      >
        {/* Toolbar */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
