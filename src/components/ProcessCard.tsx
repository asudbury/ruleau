import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import { Badge, Box, Button, Divider, Grid } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AssignmentIcon from "@material-ui/icons/Assignment";

interface ProcessCardProps {
  title: string;
  userDescription: string;
  casesToReviewCount: number;
  casesOverriddenCount: number;
}

export default function ProcessCard({
  title,
  userDescription,
  casesToReviewCount,
  casesOverriddenCount
}: ProcessCardProps) {
  return (
    <div>
      <Box borderRadius={60} borderColor="secondary.main">
        <Card>
          <CardHeader title={title} subheader={userDescription} />
          <Box p={1}>
            <Divider />
          </Box>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item>
                <Badge color="secondary" badgeContent={casesToReviewCount}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<NotificationsIcon fontSize="large" />}
                  >
                    Cases to Review
                  </Button>
                </Badge>
              </Grid>
              <Grid item>
                <Badge color="secondary" badgeContent={casesOverriddenCount}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AssignmentIcon fontSize="large" />}
                  >
                    Cases Overridden
                  </Button>
                </Badge>
              </Grid>
              <Grid item>
                <Button variant="outlined">Process Statistics</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Process Overview</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
