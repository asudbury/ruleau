import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";

export default function CaseWarnings() {
  const useStyles = makeStyles((theme) => ({
    warning: {
      color: theme.palette.warning.main,
    },
  }));

  const classes = useStyles();

  return (
    <Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item>
                <WarningIcon className={classes.warning} />
              </Grid>
              <Grid item>
                <Link href="#" className={classes.warning}>
                  <Typography className={classes.warning}>r12</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" className={classes.warning}>
                  <Typography className={classes.warning}>
                    Customer must be over 18
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
