/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiComponentSamples from "../src/MuiComponentSamples";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import LogoIcon from "../src/components/icons/LogoIcon";
import MenuIcon from "@material-ui/icons/Menu";
import BallotIcon from "@material-ui/icons/Ballot";
import {
  AppBar,
  Box,
  Divider,
  fade,
  ThemeProvider,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
} from "@material-ui/core";

import createPersistedState from "use-persisted-state";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { getTheme } from "../src/themes/ThemeManager";

import { logoutUser } from "./services/slices/user";
import DemoSettings from "./components/DemoSettings";
import LoggedOutStatus from "./components/login/LoggedOutStatus";
import LoggedInStatus from "./components/login/LoggedInStatus";
import ComponentCarousel from "./components/ComponentCarousel";

import IsUserLoggedIn from "./utils/IsUserLoggedIn";
import ThemeOptions from "./components/ThemeOptions";

import Routes from "./Routes";
import ProcessList from "./components/ProcessList";
import ProcessList3 from "./components/ProcessList3";
import { List } from "@material-ui/core";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logoButton: {
    marginRight: theme.spacing(1),
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

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
}));

const AppNew = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const isLoggedIn = IsUserLoggedIn();

  const useShowAppBar = createPersistedState("showAppBar");
  const [showAppBar] = useShowAppBar(true);

  const useAppTheme = createPersistedState("appTheme");
  const [appTheme, setAppTheme] = useAppTheme("dark");

  const theme = getTheme(appTheme);

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

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function onDarkModeChange() {
    setDarkState(!darkState);
    setAppTheme(appTheme === "dark" ? "light" : "dark");
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

  function handleHomePage() {
    window.location.href = process.env.PUBLIC_URL;
  }

  function handleClick() {
    window.location.href =
      process.env.PUBLIC_URL + "/process/Platinum-Credit-Card";
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {showAppBar && (
          <AppBar position="static">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="home page"
                onClick={handleHomePage}
              >
                <LogoIcon fontSize="large" className={classes.logoButton} />
              </IconButton>
              <Typography variant="h6" onClick={handleHomePage}>
                Ruleau
              </Typography>
              {isLoggedIn && (
                <Hidden only={["xs"]}>
                  <Box ml={10}>
                    <ProcessList />
                  </Box>
                </Hidden>
              )}
              <div className={classes.grow} />
              <div>
                <DemoSettings
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
            <Toolbar>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="home page"
                onClick={handleHomePage}
              >
                <LogoIcon fontSize="large" className={classes.logoButton} />
              </IconButton>
              <Typography variant="h6" onClick={handleHomePage}>
                Ruleau
              </Typography>
              {isLoggedIn && (
                <Hidden only={["xs"]}>
                  <Box ml={10}>
                    <ProcessList3 />
                  </Box>
                </Hidden>
              )}
              <div className={classes.grow} />
              <div>
                <DemoSettings
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
            {isLoggedIn && (
              <Hidden only={["sm", "md", "lg", "xl"]}>
                <Toolbar>
                  <Box ml={10}>
                    <ProcessList />
                  </Box>
                </Toolbar>
              </Hidden>
            )}
            {isLoggedIn && (
              <Hidden only={["sm", "md", "lg", "xl"]}>
                <Toolbar>
                  <Box ml={10}>
                    <ProcessList3 />
                  </Box>
                </Toolbar>
              </Hidden>
            )}
          </AppBar>
        )}

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={handleHomePage}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            {["Platinum Credit Card", "Entry Level Credit Card"].map(
              (text, index) => (
                <ListItem button key={text} onClick={handleClick}>
                  <ListItemIcon>
                    <BallotIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </Drawer>
        {showMocks && <Routes />}
        {showCarousel && (
          <div>
            <Divider />
            <ComponentCarousel />
          </div>
        )}
        {showThemeOptions && (
          <div>
            <Divider />
            <ThemeOptions />
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

export default AppNew;
