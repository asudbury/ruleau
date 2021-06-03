import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import DoneIcon from "@material-ui/icons/Done";
import SortIcon from "@material-ui/icons/Sort";

interface RuleAccordionProps {
  isRuleDefinition: boolean;
  hasWarning: boolean;
  ruleName: string;
  ruleDescription: string;
  ruleSubDescription: string;
}

export default function RuleAccordion({
  isRuleDefinition,
  hasWarning,
  ruleName,
  ruleDescription,
  ruleSubDescription,
}: RuleAccordionProps) {
  const useStyles = makeStyles((theme) => ({
    warning: {
      color: theme.palette.warning.main,
    },
    success: {
      color: theme.palette.success.main,
    },
  }));

  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      {!isRuleDefinition && (
        <Grid item>
          {hasWarning && <WarningIcon className={classes.warning} />}
          {!hasWarning && <DoneIcon className={classes.success} />}
        </Grid>
      )}
      {isRuleDefinition && (
        <Grid item>
          <SortIcon color="primary" />
        </Grid>
      )}
      <Grid item>
        <Typography variant="subtitle1">{ruleName}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">{ruleDescription}</Typography>
        <Typography variant="body2">{ruleSubDescription}</Typography>
      </Grid>
    </Grid>
  );
}
