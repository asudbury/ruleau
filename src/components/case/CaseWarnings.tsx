import { Grid, Typography } from "@material-ui/core";
import React from "react";
import CaseWarning from "./CaseWarning";

export default function CaseWarnings() {
  function handleRuleWarningSelected(rule: string) {
    alert("hello " + rule);
  }

  return (
    <Grid>
      <Typography gutterBottom>
        The following rules require attention:
      </Typography>
      <CaseWarning
        ruleName="12"
        ruleDescription="Customer must be over 18"
        onRuleWarningSelected={handleRuleWarningSelected}
      />
    </Grid>
  );
}
