import { createTheme } from "@mui/material";

const appTheme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontFamily: "Tahoma",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#156c56",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default appTheme;
