import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { FormProvider } from "./context/formContext";
import { NotificationProvider } from "./context/notificationContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <FormProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </FormProvider>
    </ThemeProvider>
  </React.StrictMode>
);
