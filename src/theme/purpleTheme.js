//creo el theme especificamente de esat ruta
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

//confuguro el thema a aplicar al componente
export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#262254",
    },
    secondary: {
      main: "#543884",
    },
    error: {
      main: red.A400,
    },
  },
});
