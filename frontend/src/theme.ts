import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#BF4A06",
      dark: "#303030",
      light: "#595959"
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      secondary: "#7F7F7F",
    },
    warning: {
      main: "#ffd54f",
    },
  },
});

export default theme;
