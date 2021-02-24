import React from "react";
import {
  Grid,
  Typography,
  FormControlLabel,
  Switch,
  Divider,
} from "@material-ui/core";
import RuleDocumentation from "./RuleDocumentation";

export default function RuleDetails() {
  const [showDocumentation, setShowDocumentation] = React.useState(false);

  function handleShowDocumentation() {
    setShowDocumentation(!showDocumentation);
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <FormControlLabel
          control={
            <Switch
              checked={showDocumentation}
              onChange={handleShowDocumentation}
            />
          }
          label={
            <Typography variant="caption">Show Rule Documentation</Typography>
          }
        />
        {showDocumentation && (
          <div>
            <Divider />
            <RuleDocumentation />
            <Divider />
          </div>
        )}
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </Grid>
    </Grid>
  );
}
