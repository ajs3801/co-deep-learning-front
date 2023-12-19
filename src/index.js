import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { conTheme } from "./utils/theme";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={conTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);