/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import App from "../App";
import createPersistedState from "use-persisted-state";

import { themeOptions as darkThemeOptions } from "../themes/DarkThemeOptions";
import { CssBaseline } from "@material-ui/core";
import Fireworks from './Fireworks2';

const useStyles = makeStyles((theme) => ({
    paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Protect(): JSX.Element {
  const classes = useStyles();

  const darkTheme = createMuiTheme(darkThemeOptions);

  const useProtectionPassword = createPersistedState("protectionPassword");
  const [password, setPassword] = useProtectionPassword("");

  function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  if (password === "unai2021") {
    return <App />;
  }

  return (
     <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" color="primary">
              Protected
            </Typography>
            <form noValidate>
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  onChange={onPasswordChange}
                />
              </div>
            </form>
            <Fireworks/>
          </div>
        </Container>
      </CssBaseline>
    </ThemeProvider>

  );
}
