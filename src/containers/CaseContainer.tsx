import React from "react";
import {
  Grid,
  Box,
  makeStyles,
} from "@material-ui/core";
import CaseWarnings from "../components/case/CaseWarnings";
import CaseSummary from "../components/case/CaseSummary";
import CaseDetails from "../components/case/CaseDetails";

export default function CasePage() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      overflow: "hidden",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box p={5}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CaseDetails />
          </Grid>
          <Grid item xs={12}>
            <CaseWarnings />
          </Grid>
          <Grid item xs={12}>
            <CaseSummary />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
