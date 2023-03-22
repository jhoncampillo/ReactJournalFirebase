//Los contenidos de los Layout son codigo que se necesita reutilizar
import React from "react";
import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      // sx > tiene acceso al AppTheme
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      {/* Definio la Caja que va en el centro 
       xs = pantalllas pequenas 3 posiciones
       sx = stylo
      */}
      <Grid
        item
        className="box-shadow"
        //pantallas pequenas
        xs={3}
        //stra style tamamo patallas
        sx={{
          // pantalllas medianas
          width: { md: 450 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        {/* typografia importo de material para usar la variant*/}
        <Typography variant="h5" sx={{ mb: 1 }}>
          {/* titulo del Login */}
          {title}
        </Typography>

        {/* Aqui van los {children} */}
        {children}
      </Grid>
    </Grid>
  );
};
