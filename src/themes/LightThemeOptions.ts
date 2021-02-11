import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const themeOptions: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: '#12c370',
      dark: '#17764a',
      light: '#75ff96',
      contrastText: '#1c1c1c',
    },
    secondary: {
      main: '#006664',
      dark: '#003332',
    },
    text: {
      secondary: '#b7b7b7',
      disabled: '#414348',
      hint: '#b7b7b7',
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
