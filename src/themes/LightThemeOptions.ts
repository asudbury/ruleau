import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const themeOptions: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#75FF96",
      dark: "#12C370",
      light: "#B9FFC9",
      contrastText: "#1C1C1C",
    },
    secondary: {
      main: "#12DEFF",
      dark: "#006664",
      light: "#41E4FF",
    },
    text: {
      secondary: "#B7B7B7",
      disabled: "#414348",
      hint: "#B7B7B7",
    },
  },
  typography: {
    h1: {
      fontWeight: 1000,
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
    },
    fontFamily: "Montserrat",
    fontWeightMedium: 700,
    fontWeightBold: 1000,
  },
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#1C1C1C",
        color: "#ffff",
      },
    },
    MuiButton: {
      root: {
        borderRadius: "2em",
      },
    },
    MuiTab: {
      root: {
        backgroundColor: "#1C1C1C",
        color: "#0000000",
      },
    },
  },
};
