import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Switch,
  Typography,
} from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DoneIcon from "@material-ui/icons/Done";

export default function CaseWarnings() {
  const useStyles = makeStyles((theme) => ({
    warning: {
      color: theme.palette.warning.main,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid container spacing={4}>
            <Grid item>
              <WarningIcon className={classes.warning} />
            </Grid>
            <Grid item>
              <Typography>r12</Typography>
            </Grid>
            <Grid item>
              <Typography>Customer must be over 18</Typography>
            </Grid>
            <Grid item>
              <Typography>This card is only available to adults</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={1}></Grid>
            <Grid item xs={11}>
              <FormControlLabel
                control={<Switch />}
                label={
                  <Typography variant="caption">
                    Show Rule Documentation
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={11}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Grid container spacing={4}>
            <Grid item>
              <DoneIcon />
            </Grid>
            <Grid item>
              <Typography>r13</Typography>
            </Grid>
            <Grid item>
              <Typography>Income must be over £50k</Typography>
            </Grid>
            <Grid item>
              <Typography>
                Regular income must be over £50,000 per year
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
