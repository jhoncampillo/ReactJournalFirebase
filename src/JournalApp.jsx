import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

//EMBUELVO EL APPEOUTER EN EL APPTHEME
export const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
