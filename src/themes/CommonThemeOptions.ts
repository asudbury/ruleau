import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

// eslint-disable-next-line import/prefer-default-export
export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: "Montserrat",
    body1: {
      fontFamily: "Montserrat",
    },
    body2: {
      fontFamily: "Montserrat",
    },
    button: {
      fontFamily: "Montserrat",
      textTransform: "none",
    },
    caption: {
      fontFamily: "Montserrat",
    },
    h1: {
      fontFamily: "Montserrat",
    },
    h2: {
      fontFamily: "Montserrat",
    },
    h3: {
      fontFamily: "Montserrat",
    },
    h4: {
      fontFamily: "Montserrat",
    },
    h5: {
      fontFamily: "Montserrat",
    },
    h6: {
      fontFamily: "Montserrat",
    },
    overline: {
      fontFamily: "Montserrat",
    },
    subtitle1: {
      fontFamily: "Montserrat",
    },
    subtitle2: {
      fontFamily: "Montserrat",
    },
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
