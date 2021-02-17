/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import InputBase from "@material-ui/core/InputBase";
import MuiComponentSamples from "../src/MuiComponentSamples";
import { makeStyles } from "@material-ui/core/styles";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";
import SearchIcon from "@material-ui/icons/Search";
import {
  AppBar,
  createMuiTheme,
  responsiveFontSizes,
  Divider,
  fade,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";

import createPersistedState from "use-persisted-state";

import { themeOptions as darkThemeOptions } from "./themes/DarkThemeOptions";
import { themeOptions as lightThemeOptions } from "./themes/LightThemeOptions";

import { logoutUser } from "./services/slices/user";
import Settings from "./components/Settings";
import LoggedOutStatus from "./components/login/LoggedOutStatus";
import LoggedInStatus from "./components/login/LoggedInStatus";
import HomePage from "./pages/HomePage";
import ComponentCarousel from "./components/ComponentCarousel";

import IsUserLoggedIn from "./utils/IsUserLoggedIn";
import ThemeOptions from "./components/ThemeOptions";

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
    marginLeft: theme.spacing(2),
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
  const dispatch = useDispatch();

  const classes = useStyles();

  const isLoggedIn = IsUserLoggedIn();

  let lightTheme = createMuiTheme(lightThemeOptions);
  lightTheme = responsiveFontSizes(lightTheme);

  let darkTheme = createMuiTheme(darkThemeOptions);
  darkTheme = responsiveFontSizes(darkTheme);

  const useShowAppBar = createPersistedState("showAppBar");
  const [showAppBar] = useShowAppBar(true);

  const useAppTheme = createPersistedState("appTheme");
  const [appTheme, setAppTheme] = useAppTheme("dark");

  const theme = appTheme === "dark" ? { ...darkTheme } : { ...lightTheme };

  const currentThemeOptions =
    appTheme === "dark" ? darkThemeOptions : lightThemeOptions;

  const [themeString, setThemeString] = useState(
    JSON.stringify(currentThemeOptions)
  );

  const [darkState, setDarkState] = useState(true);

  const useShowSampleComponents = createPersistedState("showSampleComponents");
  const [
    showSampleComponents,
    setShowSampleComponents,
  ] = useShowSampleComponents(false);

  const useShowCarousel = createPersistedState("showCarousel");
  const [showCarousel, setShowCarousel] = useShowCarousel(false);

  const useShowMocks = createPersistedState("showMocks");
  const [showMocks, setShowMocks] = useShowMocks(true);

  const useShowThemeOptions = createPersistedState("showThemeOptions");
  const [showThemeOptions, setShowThemeOptions] = useShowThemeOptions(false);

  function onDarkModeChange() {
    setDarkState(!darkState);
    setAppTheme(appTheme === "dark" ? "light" : "dark");
    setThemeString(
      appTheme === "dark"
        ? JSON.stringify(lightThemeOptions)
        : JSON.stringify(darkThemeOptions)
    );
  }

  function onShowSampleComponents() {
    setShowSampleComponents(!showSampleComponents);
  }

  function onShowCarousel() {
    setShowCarousel(!showCarousel);
  }

  function onShowMocks() {
    setShowMocks(!showMocks);
  }

  function onShowThemeOptions() {
    setShowThemeOptions(!showThemeOptions);
  }

  function onLogout() {
    dispatch(logoutUser());
  }

  function onLogin() {}

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {showAppBar && (
          <AppBar position="static">
            <Toolbar>
              <CenterFocusStrongIcon
                fontSize="large"
                className={classes.logoButton}
              />
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
                  showSampleComponents={showSampleComponents}
                  showCarousel={showCarousel}
                  showMocks={showMocks}
                  showThemeOptions={showThemeOptions}
                  onDarkModeChange={onDarkModeChange}
                  onShowSampleComponents={onShowSampleComponents}
                  onShowCarousel={onShowCarousel}
                  onShowMocks={onShowMocks}
                  onShowThemeOptions={onShowThemeOptions}
                />
              </div>
              <div>
                {isLoggedIn && <LoggedInStatus onLogout={onLogout} />}
                {!isLoggedIn && <LoggedOutStatus onLogin={onLogin} />}
              </div>
            </Toolbar>
          </AppBar>
        )}
        {showMocks && <HomePage />}
        {showCarousel && (
          <div>
            <Divider />
            <ComponentCarousel />
          </div>
        )}
        {showThemeOptions && (
          <div>
            <Divider />
            <ThemeOptions themeOptions={themeString} />
          </div>
        )}
        {showSampleComponents && (
          <div>
            <Divider />
            <MuiComponentSamples />{" "}
          </div>
        )}
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
