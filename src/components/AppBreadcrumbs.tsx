import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
  },
}));

export default function AppBreadcrumbs(): JSX.Element {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();

  const routes = location.pathname !== "/" ? location.pathname.split("/") : [];

  function handleGoHome() {
    history.push("/");
  }

  function capitalise(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  return (
    <>
      {routes.length > 0 && (
        <Box ml={4} mt={2}>
          <Breadcrumbs aria-label="breadcrumb" data-testid="breadcrumbs">
            <Link href="/" onClick={handleGoHome} className={classes.link}>
              <HomeIcon color="primary" className={classes.icon} />
              Home
            </Link>
            <Typography className={classes.link}>
              <WorkIcon color="primary" className={classes.icon} />
              {capitalise(routes[1])}
              &nbsp;
              {routes[2]}
            </Typography>
          </Breadcrumbs>
        </Box>
      )}
    </>
  );
}
