import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import BallotIcon from "@material-ui/icons/Ballot";
import WorkIcon from "@material-ui/icons/Work";
import { logInfo } from "../utils/Logger";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    textDecoration: "underline",
  },
  text: {
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

export default function AppBreadcrumbs2v2({
  page,
}: AppBreadcrumbsProps): JSX.Element {
  const publicUrl = process.env.PUBLIC_URL;

  logInfo(publicUrl);

  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();

  const routes = location.pathname !== "/" ? location.pathname.split("/") : [];

  logInfo(routes.toString());

  let processPart = 2;

  if (routes[2] === "process") {
    processPart = 3;
  }
  function getFormattedTitle(title: string) {
    return title.replace(new RegExp("-", "g"), " ");
  }

  function handleGoHome(event: { preventDefault: () => void }) {
    event.preventDefault();
    history.push(publicUrl);
  }

  function handleProcessPage(event: { preventDefault: () => void }) {
    event.preventDefault();
    const url = publicUrl + "/" + routes[1] + "/" + routes[processPart];
    logInfo(url);
    history.push(url);
  }

  return (
    <Breadcrumbs aria-label="breadcrumb" data-testid="breadcrumbs">
      <Link
        href="#"
        onClick={handleGoHome}
        className={classes.link}
        color="textPrimary"
      >
        <HomeIcon color="inherit" className={classes.icon} fontSize="small" />
        Home
      </Link>
      {page === Page.ProcessPage && (
        <Typography className={classes.text}>
          <BallotIcon
            color="inherit"
            className={classes.icon}
            fontSize="small"
          />
          {getFormattedTitle(routes[processPart])}
        </Typography>
      )}
      {page === Page.CasePage && (
        <Link
          href="#"
          onClick={handleProcessPage}
          className={classes.link}
          color="textPrimary"
        >
          <BallotIcon
            color="inherit"
            className={classes.icon}
            fontSize="small"
          />
          {getFormattedTitle(routes[processPart])}
        </Link>
      )}
      {page === Page.CasePage && (
        <Typography className={classes.text}>
          <WorkIcon color="inherit" className={classes.icon} fontSize="small" />
          {routes[4]}
        </Typography>
      )}
    </Breadcrumbs>
  );
}
