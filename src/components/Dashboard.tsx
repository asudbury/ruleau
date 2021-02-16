import { Box, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ProcessCard from "./ProcessCard";

export default function Dashboard() {
  return (
    <Box p={5}>
      <Grid container spacing={5} direction="column">
        <Grid item>
          <Typography variant="h5">Welcome to your Ruleau Dashboard</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" color="primary">
            My Processes
          </Typography>
        </Grid>
        <Grid item md={7}>
          <ProcessCard
            title="Gold Credit Card"
            userDescription="Top of the range Credit Card"
            casesToReviewCount={7}
            casesOverriddenCount={21}
          />
        </Grid>
        <Grid item md={7}>
          <ProcessCard
            title="Silver Credit Card"
            userDescription="Student Friendly Credit Card"
            casesToReviewCount={4}
            casesOverriddenCount={65}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
