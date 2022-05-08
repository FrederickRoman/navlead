import { createTheme, Theme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const lightGrey = grey[100];
const purple = "#a158a3";
const amber = "#ffbf00";

const theme: Theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: lightGrey,
    },
    primary: {
      main: purple,
    },
    secondary: {
      main: amber,
    },
  },
});

export const lightestFontColor = "white";
export const brandFontFamily = "'Audiowide', Arial, Helvetica, sans-serif";
export default theme;
