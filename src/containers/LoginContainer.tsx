import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { setLoginSuccess } from "../services/slices/user";
import { useDispatch } from "react-redux";
import LoginEmailAddress from "../components/login/LoginEmailAddress";
import LoginPassword from "../components/login/LoginPassword";
import LogInNewPassword from "../components/login/LoginNewPassword";

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
  spacer: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface LoginProps {
  initialState: number;
}

export default function LogInContainer({ initialState }: LoginProps) {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [formState, setFormState] = useState(initialState);

  const [logInEmailAddress, setLoginEmailAddress] = useState("");

  function onContinue(emailAddress: string) {
    setLoginEmailAddress(emailAddress);
    setFormState(1);
  }

  function onChangeAccount() {
    setFormState(0);
  }

  function onLogin(password: string) {
    if (logInEmailAddress === "b@unai.com") {
      setFormState(2);
    } else {
      dispatch(setLoginSuccess(logInEmailAddress));
    }
  }

  function onUpdatePassword(password: string) {
    dispatch(setLoginSuccess(logInEmailAddress));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          color="primary"
          className={classes.spacer}
        >
          Login to Ruleau
        </Typography>
        {formState === 0 && <LoginEmailAddress onContinue={onContinue} />}
        {formState === 1 && (
          <LoginPassword
            emailAddress={logInEmailAddress}
            onChangeAccount={onChangeAccount}
            onLogin={onLogin}
          />
        )}
        {formState === 2 && (
          <LogInNewPassword onUpdatePassword={onUpdatePassword} />
        )}
      </div>
    </Container>
  );
}
