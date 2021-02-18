import React from "react";
import { useHistory } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import {
  Badge,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  makeStyles,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 180,
  },
}));

interface ProcessCardProps {
  processId: number;
  title: string;
  userDescription: string;
  casesToReviewCount: number;
  casesOverriddenCount: number;
}

export default function ProcessCard({
  processId,
  title,
  userDescription,
  casesToReviewCount,
  casesOverriddenCount,
}: ProcessCardProps) {
  const classes = useStyles();

  const history = useHistory();

  function onCasesToReview() {
    history.push(
      "/process/" + processId + "/cases/?openclosed=1&result=3"
    );
  }

  function onCasesOverridden() {
    history.push(
      "/process/" + processId + "/cases/?openclosed=2&result=1"
    );
  }

  return (
    <Card>
      <CardHeader title={title} subheader={userDescription} />
      <Box p={1}>
        <Divider />
      </Box>
      <CardContent>
        <Grid container spacing={5}>
          <Grid item>
            <FormControl className={classes.formControl}>
              <Badge color="secondary" badgeContent={casesToReviewCount}>
                <Button
                  className={classes.formControl}
                  variant="outlined"
                  color="secondary"
                  startIcon={<NotificationsIcon />}
                  onClick={onCasesToReview}
                >
                  Cases to Review
                </Button>
              </Badge>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <Badge color="secondary" badgeContent={casesOverriddenCount}>
                <Button
                  className={classes.formControl}
                  variant="outlined"
                  color="secondary"
                  startIcon={<AssignmentIcon />}
                  onClick={onCasesOverridden}
                >
                  Cases Overridden
                </Button>
              </Badge>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <Button variant="outlined">Process Statistics</Button>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <Button variant="outlined">Process Overview</Button>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
