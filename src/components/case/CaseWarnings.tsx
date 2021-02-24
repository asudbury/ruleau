import { Grid } from "@material-ui/core";
import CaseWarning from "./CaseWarning";

export default function CaseWarnings() {
  function handleRuleWarningSelected(rule : string) {
    alert("hello " + rule);
  }

  return (
    <Grid>
      <CaseWarning
        ruleName="12"
        ruleDescription="Customer must be over 18"
        onRuleWarningSelected={handleRuleWarningSelected}
      />
    </Grid>
  );
}
