import React from "react";
import ReactDOM from "react-dom/client";

import { createTheme } from "@mui/material";
import App from "./App";

import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
