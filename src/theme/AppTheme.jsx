import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material/";
import { purpleTheme } from "./"; ///archivo barril

//El Provider del tema recibe un childern que son los hijos en este caso <App></App>
// El {Theme hay que crearlo y estructuralo aparte}* - purpleTheme.js*
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      {/* Permite que todos los Navegadors desplieguen bien el componente "Hace lo mismo que el normalice.css"
      CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
