import React from "react";
import { Grid, Typography, Select, MenuItem, Button } from "@material-ui/core";
import LabelAndValue from "../core/LabelAndValue";

interface CaseDetailsProps {
  isClosed: boolean;
  onCloseCase: () => void;
  onReopenCase: () => void;
}

export default function CaseDetails({
  isClosed,
  onCloseCase,
  onReopenCase,
}: CaseDetailsProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <LabelAndValue variant="h5" label="Case" value="Unknown" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <Typography variant="body1">Execution:</Typography>
          <Select value={3} style={{ marginLeft: 10 }}>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="1">1</MenuItem>
          </Select>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <LabelAndValue
          variant="body1"
          label="Processed On"
          value="12 July 2020 13:10"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LabelAndValue variant="body1" label="Name" value="Test Application" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LabelAndValue
          variant="body1"
          label="Date of Birth"
          value="03 March 1975"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        {!isClosed && (
          <Button
            data-testid="closeCase"
            type="submit"
            variant="outlined"
            color="primary"
            onClick={onCloseCase}
          >
            Close Case
          </Button>
        )}
        {isClosed && (
          <Button
            data-testid="reopenCase"
            type="submit"
            variant="outlined"
            color="primary"
            onClick={onReopenCase}
          >
            Reopen Case
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
