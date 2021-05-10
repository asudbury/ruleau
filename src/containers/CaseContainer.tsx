import React, { useState } from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import CaseWarnings from "../components/case/CaseWarnings";
import CaseRules from "../components/case/CaseRules";
import CaseDetails from "../components/case/CaseDetails";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

export default function CaseContainer(): JSX.Element {
  const classes = useStyles();

  const [isClosed, setIsClosed] = useState(false);

  const [warningSelected, setWarningSelected] = useState("");

  function handleCloseCase() {
    /// setIsClosed(true);
  }

  function handleReopenCase() {
    /// setIsClosed(false);
  }

  function handleRuleWarningSelected(rule: string) {
    setWarningSelected(rule);
  }

  return (
    <div className={classes.root}>
      <Box ml={5} mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CaseDetails
              isClosed={isClosed}
              onCloseCase={handleCloseCase}
              onReopenCase={handleReopenCase}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CaseWarnings onWarningSelected={handleRuleWarningSelected} />
          </Grid>
          <Grid item xs={12}>
            <CaseRules warningSelected={warningSelected} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
