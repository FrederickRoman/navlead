import { createTheme, Theme } from "@mui/material/styles";

import { grey, blue, amber } from "@mui/material/colors";

/**
 * Triadic color palette
 * primary:   #a158a3   purple
 * secondary: #a158a3   amber
 * tertiary:  #00825b   teal
 */

const theme: Theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: grey[100],
    },
    primary: {
      main: "#a158a3",
    },
    secondary: {
      main: "#ffbf00",
    },
  },
});

export const brandFontFamily = "'Audiowide', Arial, Helvetica, sans-serif";
export default theme;
