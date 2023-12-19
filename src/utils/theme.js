import { createTheme } from "@mui/material";
import "./font.css";

export const conTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8DC63F",
      contrastText: "#303030",
    },
    background: {
      default: "#F8F8F8",
      paper: "#FFF",
    },
  },
  typography: {
    fontFamily: [
      '"Pretendard-Regular"',
      "-apple-system",
      "BlinkMacSystemFont",
      "system-ui",
      "Roboto",
      '"Helvetica Neue"',
      '"Segoe UI"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Pretendard-Regular",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Pretendard-Regular",
        },
      },
    },
  },
});
