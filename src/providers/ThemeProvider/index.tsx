import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const MUIThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={{}}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
