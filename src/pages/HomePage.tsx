import React from "react";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import { Grid, Box, makeStyles } from "@material-ui/core";
import Login from "../containers/Login";
import Dashboard from "../components/Dashboard";
import IsUserLoggedIn from "../utils/IsUserLoggedIn";

export default function HomePage() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      overflow: "hidden"
    },
    image: {
      backgroundImage:
        "url('https://asudbury.github.io/ruleau/assets/img/homepage.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: 900,
      height: 600
    },
  }));

  const isLoggedIn = IsUserLoggedIn();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!isLoggedIn && (
        <Box p={5}>
          <Grid container spacing={5}>
            <Hidden smDown>
              <Grid item md={5} component={Box} className={classes.image}>
                <Box p={5}>
                  <Typography variant="h5">About Ruleau</Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </Box>
              </Grid>
            </Hidden>

            <Grid item xs={12} sm={12} md={7}>
              <Login initialState={0} />
            </Grid>
          </Grid>
        </Box>
      )}
      {isLoggedIn && <Dashboard />}
    </div>
  );
}
