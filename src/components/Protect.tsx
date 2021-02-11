/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import App from "../App";
import createPersistedState from "use-persisted-state";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Protect(): JSX.Element {
  const classes = useStyles();

  const useProtectionPassword = createPersistedState("protectionPassword");
  const [password, setPassword] = useProtectionPassword("");
  
  function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function onSubmit() {
  }

  if (password === "unai2021") {
    return <App />;
  }

  return (
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
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.submit}
              onClick={onSubmit}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
