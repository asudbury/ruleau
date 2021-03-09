import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

// eslint-disable-next-line import/prefer-default-export
export const themeOptions: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#12c370",
      dark: "#17764a",
      light: "#75ff96",
      contrastText: "#1c1c1c",
    },
    secondary: {
      main: "#12DEFF",
      dark: "#003332",
    },
    text: {
      secondary: "#b7b7b7",
      disabled: "#414348",
      hint: "#b7b7b7",
    },
  },
};
