import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const themeOptions: ThemeOptions = {
  palette: {
    type: "dark",
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
