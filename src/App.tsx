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

import { themeOptions as darkThemeOptions } from "./themes/DarkThemeOptions";
import { themeOptions as lightThemeOptions } from "./themes/LightThemeOptions";

import Settings from "./features/Settings";
import UserStatus from "./features/UserStatus";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logoButton: {
    marginRight: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();

  const lightTheme = createMuiTheme(lightThemeOptions);
  const darkTheme = createMuiTheme(darkThemeOptions);

  const [appTheme, setAppTheme] = useState("dark");
  const theme = appTheme === "dark" ? { ...darkTheme } : { ...lightTheme };

  const [darkState, setDarkState] = useState(true);

  function onDarkModeChange() {
    setDarkState(!darkState);
    setAppTheme(appTheme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppBar position="static">
          <Toolbar>
            <CenterFocusStrongIcon className={classes.logoButton} />
            <Typography variant="h6">Ruleau</Typography>
            <div className={classes.grow} />
            <div>
              <Settings
                themeName={appTheme}
                onDarkModeChange={onDarkModeChange}
              />
            </div>
            <div>
              <UserStatus
                emailAddress="adrian.sudbury@unai.com"
                onLogout={onDarkModeChange}
                isLoggedIn={true}
              />
            </div>
          </Toolbar>
        </AppBar>
        <MuiComponentSamples />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
