/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import InputBase from "@material-ui/core/InputBase";
import MuiComponentSamples from "../src/MuiComponentSamples";
import { makeStyles } from "@material-ui/core/styles";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";
import SearchIcon from "@material-ui/icons/Search";
import {
  AppBar,
  createMuiTheme,
  fade,
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
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
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
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
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
