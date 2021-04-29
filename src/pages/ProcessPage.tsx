import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Box, makeStyles, Tabs, Tab, AppBar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import WorkIcon from "@material-ui/icons/Work";
import TimelineIcon from "@material-ui/icons/Timeline";
import Cases from "../components/process/MockCases2";
import Rules from "../components/process/Rules";
import VersionHistory from "../components/process/VersionHistory";
import AppBreadcrumbs, { Page } from "../components/AppBreadcrumbs";
import { Divider } from "@material-ui/core";
import GetProcessSelector from "../services/selectors/GetProcessSelector";
import useUrlManager from "../hooks/useUrlManager";
import { logDebug } from "../utils/Logger";

export default function ProcessPage() {
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      overflow: "hidden",
      width: 1000,
    },
  }));

  const [publicUrl, formattedProcessName] = useUrlManager();

  const classes = useStyles();

  const [value, setValue] = useState(0);

  enum TabValue {
    Cases,
    Rules,
    History,
  }

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
    history.push(
      publicUrl +
        "/process/" +
        encodeURIComponent(formattedProcessName) +
        "/case/" +
        caseID
    );
  }

  function onHistoryItemSelected(version: string) {}

  /// dispatch(fetchCases({ config: {} }));

  return (
    <div className={classes.root}>
      <Box p={5}>
        <AppBreadcrumbs page={Page.ProcessPage} />
        <Box mt={2} mb={2}>
          <Divider />
        </Box>
        <Typography variant="h5" gutterBottom>
          Process: {process.name}
        </Typography>
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
            <Tab icon={<SortIcon />} label="Rules" value={TabValue.Rules} />
            <Tab
              icon={<TimelineIcon />}
              label="History"
              value={TabValue.History}
            />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <Cases
            openClosed={openClosed}
            result={result}
            onCaseSelected={onCaseSelected}
          />
        )}
        {value === 1 && <Rules />}
        {value === 2 && (
          <VersionHistory onHistoryItemSelected={onHistoryItemSelected} />
        )}
      </Box>
    </div>
  );
}
