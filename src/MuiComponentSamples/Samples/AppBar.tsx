import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

export default function AppBarExample() {
  const classes = useStyles();

   return (
    <div className={classes.grow}>
      <AppBar position="static"  color="default">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <CenterFocusStrongIcon />
          </IconButton>
          <Typography variant="h6">
            Ruleau
          </Typography>
          <div className={classes.grow} />
          <div>
            <IconButton
              edge="end"
              color="inherit"
            >
              <SettingsIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
