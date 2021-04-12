import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import BallotIcon from "@material-ui/icons/Ballot";
import WorkIcon from "@material-ui/icons/Work";
import { Box, Divider } from "@material-ui/core";
import { logInfo } from "../utils/Logger";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
  },
}));

export enum Page {
  ProcessPage,
  CasePage,
}

interface AppBreadcrumbsProps {
  page: Page;
}

export default function AppBreadcrumbs({
  page,
}: AppBreadcrumbsProps): JSX.Element {
  const publicUrl = process.env.PUBLIC_URL;

  logInfo(publicUrl);

  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();

  const routes = location.pathname !== "/" ? location.pathname.split("/") : [];

  logInfo(routes.toString());

  function handleGoHome() {
    history.push(publicUrl);
  }

  function handleProcessPage() {
    const url = "/" + routes[1] + "/" + routes[2];
    logInfo(url);
    history.push(url);
  }

  return (
    <>
      <Box ml={4} mt={2}>
        <Breadcrumbs aria-label="breadcrumb" data-testid="breadcrumbs">
          <Link
            href="/"
            onClick={handleGoHome}
            className={classes.link}
            color="textPrimary"
          >
            <HomeIcon
              color="primary"
              className={classes.icon}
              fontSize="small"
            />
            Home
          </Link>
          {page === Page.ProcessPage && (
            <Typography className={classes.link}>
              <BallotIcon
                color="primary"
                className={classes.icon}
                fontSize="small"
              />
              {routes[2]}
            </Typography>
          )}
          {page === Page.CasePage && (
            <Link
              href="/"
              onClick={handleProcessPage}
              className={classes.link}
              color="textPrimary"
            >
              <BallotIcon
                color="primary"
                className={classes.icon}
                fontSize="small"
              />
              {routes[2]}
            </Link>
          )}
          {page === Page.CasePage && (
            <Typography className={classes.link}>
              <WorkIcon
                color="primary"
                className={classes.icon}
                fontSize="small"
              />
              {routes[4]}
            </Typography>
          )}
        </Breadcrumbs>
      </Box>
      <Box ml={5} mt={1} mr={1}>
        <Divider />
      </Box>
    </>
  );
}
