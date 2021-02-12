/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import createPersistedState from "use-persisted-state";
import CapsLock from "./CapsLock";

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

interface LoginProps {
  initialState: number;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function LogIn({ initialState, setIsLoggedIn }: LoginProps) {
  const classes = useStyles();

  const useEmailAddressState = createPersistedState("emailAddress");
  const [emailAddress, setEmailAddress] = useEmailAddressState("");

  const [passwordShown, setPasswordShown] = useState(false);

  const useRememberMeState = createPersistedState("rememberMe");
  const [rememberMe, setRememberMe] = useRememberMeState(false);

  const [state, setState] = useState(initialState);

  function onEmailAddressChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmailAddress(e.target.value);
  }

  function onRememberMeChange() {
    setRememberMe(!rememberMe);
  }

  function onShowPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswordShown(e.target.checked);
  }

  function onContinue() {
    setState(1);
  }

  function onChangeAccount() {
    setState(0);
  }

  function onLogin() {
    setIsLoggedIn(true);

    if (!rememberMe) {
      setEmailAddress("");
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Login to Ruleau
        </Typography>
        <form noValidate>
          {state === 0 && (
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                autoComplete="email"
                value={emailAddress}
                autoFocus
                onChange={onEmailAddressChange}
              />
              <FormControlLabel
                control={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <Checkbox
                    color="primary"
                    checked={rememberMe}
                    onChange={onRememberMeChange}
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
                onClick={onContinue}
              >
                Continue
              </Button>
            </div>
          )}
          {state === 1 && (
            <div>
              <Typography variant="body2">
                Account:
                {emailAddress}
              </Typography>
              <Link href="#" variant="body2" onClick={onChangeAccount}>
                Change account
              </Link>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type={passwordShown ? "text" : "password"}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    onChange={onShowPasswordChange}
                    checked={passwordShown}
                  />
                }
                label="Show password"
              />
              <CapsLock />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
                onClick={onLogin}
              >
                Login
              </Button>
              <Link href="#" variant="body2">
                Forgot your password?
              </Link>
            </div>
          )}
          {state === 2 && (
            <div>
              <Typography variant="body2">
                Please choose a new password
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="New Password"
                type={passwordShown ? "text" : "password"}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Confirm Password"
                type={passwordShown ? "text" : "password"}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    onChange={onShowPasswordChange}
                    checked={passwordShown}
                  />
                }
                label="Show password"
              />
              <CapsLock />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
                onClick={onLogin}
              >
                Login
              </Button>
            </div>
          )}
        </form>
      </div>
    </Container>
  );
}
