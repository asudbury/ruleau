import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import { Grid, Box } from "@material-ui/core";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn && (
        <Grid container spacing={5}>
          <Hidden smDown>
            <Grid item md={5} component={Box}>
              <Box p={5}>
                <Typography variant="h5">About Ruleau</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Box>
            </Grid>
          </Hidden>

          <Grid item xs={12} sm={12} md={7}>
            <Login setIsLoggedIn={setIsLoggedIn} initialState={0} />
          </Grid>
        </Grid>
      )}
      {isLoggedIn && <Dashboard /> }
    </div>
  );
}
