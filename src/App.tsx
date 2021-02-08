/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiComponentSamples from "../src/MuiComponentSamples";
import { makeStyles } from "@material-ui/core/styles";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";
import {
  AppBar,
  createMuiTheme,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";

import Settings from "./features/Settings";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logoButton: {
    marginRight: theme.spacing(2),
  },
}));

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
  typography: {
    fontFamily: "Montserrat",
    button: {
      textTransform: "none",
    },
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
  typography: {
    fontFamily: "Montserrat",
    button: {
      textTransform: "none",
    },
  },
});

const App = () => {
  const classes = useStyles();

  const [appTheme, setAppTheme] = useState("night");
  const theme = appTheme === "dark" ? { ...darkTheme } : { ...lightTheme };

  function onDarkModeChange() {
    setAppTheme(appTheme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppBar position="static" color="default">
          <Toolbar>
            <CenterFocusStrongIcon className={classes.logoButton} />
            <Typography variant="h6">Ruleau</Typography>
            <div className={classes.grow} />
            <div>
                <Settings onDarkModeChange={onDarkModeChange} />
            </div>
          </Toolbar>
        </AppBar>
        <MuiComponentSamples />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
