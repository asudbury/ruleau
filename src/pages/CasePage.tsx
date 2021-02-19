import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Box,
  makeStyles,
  MenuItem,
  Select,
  Button,
} from "@material-ui/core";
import LabelAndValue from "../components/core/LabelAndValue";

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
              value="12 July 2020"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LabelAndValue
              variant="body1"
              label="Name"
              value="Test Application"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LabelAndValue
              variant="body1"
              label="Date of Birth"
              value="03 March 1975"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              data-testId="closeCase"
              type="submit"
              variant="outlined"
              color="secondary"
            >
              Close Case
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item>Hello from a case!</Grid>
        </Grid>
      </Box>
    </div>
  );
}
