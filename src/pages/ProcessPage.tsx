import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Grid, Box, makeStyles, Tabs, Tab } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import TimelineIcon from "@material-ui/icons/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import Cases from "../components/process/Cases";

export default function ProcessPage() {
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      overflow: "hidden",
    },
  }));

  const classes = useStyles();

  const [value, setValue] = useState(0);

  enum TabValue {
    Cases,
    Rules,
    Statistics
  }

  const urlParams = new URLSearchParams(window.location.search);

  const opencloseParam = urlParams.get('openclosed') || "";
  const resultParam = urlParams.get('result') || "";

  console.log("ProcessPage opencloseParam=" + opencloseParam);
  console.log("ProcessPage resultParam=" + resultParam);

  const openClosed: string[] = [opencloseParam];
  const result: string[] = [resultParam];

  const handleTabChange = (event: React.ChangeEvent<{}>, value: number) => {
    setValue(value);
  };

  function onCaseSelected(caseID: string) {
    history.push(
      // eslint-disable-next-line no-useless-concat
      "/process/" + "unknown" + "/case/" + caseID
    );
  }
  return (
    <div className={classes.root}>
      <Box p={5}>
        <Typography variant="h5" gutterBottom>
          Process: Unknown
        </Typography>
        <Typography variant="body1" gutterBottom>
          User Supplied Description
        </Typography>
        <Grid container spacing={5}>
          <Grid item>
            <Tabs
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="secondary"
              value={value}
              onChange={handleTabChange}
            >
              <Tab icon={<WorkIcon />} label="Cases" value={TabValue.Cases} />
              <Tab icon={<SortIcon />} label="Rules" value={TabValue.Rules} />
              <Tab icon={<TimelineIcon />} label="Statistics" value={TabValue.Statistics} />
            </Tabs>
          </Grid>
        </Grid>
        {value === 0 && (
          <Cases
            openClosed={openClosed}
            result={result}
            onCaseSelected={onCaseSelected}
          />
        )}
      </Box>
    </div>
  );
}
