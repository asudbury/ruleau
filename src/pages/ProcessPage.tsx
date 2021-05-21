import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  makeStyles,
  Tabs,
  Tab,
  AppBar,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import SortIcon from "@material-ui/icons/Sort";
import WorkIcon from "@material-ui/icons/Work";
import SubjectIcon from "@material-ui/icons/Subject";
import TimelineIcon from "@material-ui/icons/Timeline";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import Cases from "../components/process/MockCases2";
import Overrides from "../components/process/Overrides";
import Rules from "../components/process/Rules";
import VersionHistory from "../components/process/VersionHistory";
import AppBreadcrumbs, { Page } from "../components/AppBreadcrumbs";
import { Divider } from "@material-ui/core";
import GetProcessSelector from "../services/selectors/GetProcessSelector";
import useUrlManager from "../hooks/useUrlManager";
import { logDebug } from "../utils/Logger";

export default function ProcessPage() {
  const history = useHistory();
  const handle = useFullScreenHandle();

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      overflow: "hidden",
    },
    grow: {
      flexGrow: 1,
    },
  }));

  const [publicUrl, formattedProcessName] = useUrlManager();

  const classes = useStyles();

  const [value, setValue] = useState(0);

  enum TabValue {
    Cases,
    Overrides,
    Rules,
    History,
  }

  const showRulesTab = true;
  const showHistoryTab = true;

  const urlParams = new URLSearchParams(window.location.search);

  const opencloseParam = urlParams.get("openclosed") || "";
  const resultParam = urlParams.get("result") || "";

  logDebug("ProcessPage", "opencloseParam=" + opencloseParam);
  logDebug("ProcessPage", "resultParam=" + resultParam);

  const openClosed: string[] = [opencloseParam];
  const result: string[] = [resultParam];

  const process = GetProcessSelector(formattedProcessName);

  const handleTabChange = (event: React.ChangeEvent<{}>, value: number) => {
    setValue(value);
  };

  function onCaseSelected(caseID: string) {
    logDebug("ProcessPage", "lastCaseId=" + caseID);
    localStorage.setItem("lastCaseId", caseID);
    history.push(
      publicUrl +
        "/process/" +
        encodeURIComponent(formattedProcessName) +
        "/case/" +
        caseID
    );
  }

  function onHistoryItemSelected(version: string) {}

  function handleFullScreen() {
    handle.enter();
  }

  function handleFullScreenExit() {
    handle.exit();
  }

  /// dispatch(fetchCases({ config: {} }));

  return (
    <div className={classes.root}>
      <Box p={5}>
        <AppBreadcrumbs page={Page.ProcessPage} />
        <Box mt={2} mb={2}>
          <Divider />
        </Box>
        <FullScreen handle={handle}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h5" gutterBottom>
                Process: {process.name}
              </Typography>
              <div className={classes.grow} />
              {!handle.active && (
                <IconButton
                  edge="end"
                  aria-label="Full Screen"
                  onClick={handleFullScreen}
                >
                  <FullscreenIcon />
                </IconButton>
              )}
              {handle.active && (
                <IconButton
                  edge="end"
                  aria-label="Full Screen Exit"
                  onClick={handleFullScreenExit}
                >
                  <FullscreenExitIcon />
                </IconButton>
              )}
            </Toolbar>
          </AppBar>
          <Typography variant="body1" gutterBottom>
            {process.description}
          </Typography>
          <AppBar position="static">
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              value={value}
              onChange={handleTabChange}
            >
              <Tab icon={<WorkIcon />} label="Cases" value={TabValue.Cases} />
              <Tab
                icon={<SubjectIcon />}
                label="Overrides"
                value={TabValue.Overrides}
              />
              {showRulesTab && (
                <Tab icon={<SortIcon />} label="Rules" value={TabValue.Rules} />
              )}
              {showHistoryTab && (
                <Tab
                  icon={<TimelineIcon />}
                  label="History"
                  value={TabValue.History}
                />
              )}
            </Tabs>
          </AppBar>
          {value === TabValue.Cases && (
            <Cases
              openClosed={openClosed}
              result={result}
              onCaseSelected={onCaseSelected}
            />
          )}
          {value === TabValue.Overrides && (
            <Overrides onCaseSelected={onCaseSelected} />
          )}
          {value === TabValue.Rules && <Rules />}
          {value === TabValue.History && (
            <VersionHistory onHistoryItemSelected={onHistoryItemSelected} />
          )}
        </FullScreen>
      </Box>
    </div>
  );
}
