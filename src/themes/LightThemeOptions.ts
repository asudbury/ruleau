import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

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
  typography: {
     button: {
      textTransform: "none",
    },
    fontFamily: "Montserrat",
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
    MuiTabs: {
      indicator: {
        height: "0.3em",
      },
    },
    MuiTab: {
      wrapper: {
        flexDirection: "row",
      },
      root: {
        backgroundColor: "#1C1C1C",
        color: "#0000000",
      },
    },
    MuiSvgIcon: {
      root: {
        width: "1.3em",
      },
    },
    MuiCard: {
      root: {
        borderRadius: "2em",
      },
    },
  },
};
