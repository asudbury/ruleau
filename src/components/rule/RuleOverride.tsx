import React from "react";
import { Button, Grid } from "@material-ui/core";

export default function RuleOverride() {
  function handleSaveOverride() {
    alert("handleSaveOverride");
  }

  function handleRemoveOverride() {
    alert("handleRemoveOverride");
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <Button
          data-testid="closeCase"
          type="submit"
          variant="outlined"
          color="secondary"
        >
          Save Override
        </Button>
        <Button
          data-testid="reopenCase"
          type="submit"
          variant="outlined"
          color="secondary"
        >
          Remove Override
        </Button>
      </Grid>
    </Grid>
  );
}
