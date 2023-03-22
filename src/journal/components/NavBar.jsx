import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      //   // maneja el tama;o del navbar el pantallas grandes
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        // maneja el tama;o del navbar el pantallas pequenas
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        {/* Icono de menu Hamburguesa */}
        <IconButton
          // color heredado
          color="inherit"
          edge="start"
          //Menu hamburguesa aparece si la pantalla es muy pequena
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          {/* Meenu Hamburguesa */}
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* titulo */}
          <Typography variant="h6" component="div">
            JournalApp
          </Typography>
          {/* Icono del salir */}
          <IconButton color="error">
            {/* icono */}
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
