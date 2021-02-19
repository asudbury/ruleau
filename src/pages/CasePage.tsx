import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Box, makeStyles } from "@material-ui/core";

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
        <Typography variant="h5" gutterBottom>
          Case: Unknown
        </Typography>
        <Typography variant="body1" gutterBottom>
          Execution: XX
        </Typography>
        <Typography variant="body1" gutterBottom>
          Name: Lorem Ipsum
        </Typography>
        <Grid container spacing={5}>
          <Grid item>Hello from a case!</Grid>
        </Grid>
      </Box>
    </div>
  );
}
