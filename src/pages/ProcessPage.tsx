import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Box, makeStyles, Tabs, Tab } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import TimelineIcon from '@material-ui/icons/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import CasesTable from "../components/CasesTable";

export default function ProcessPage() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      overflow: "hidden",
    },
  }));

  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, value: number) => {
    setValue(value);
  };

  return (
    <div className={classes.root}>
      <Box p={5}>
        <Typography variant="h5" gutterBottom>Process: Unknown</Typography>
        <Typography variant="body1" gutterBottom>User Supplied Description</Typography>
        <Grid container spacing={5}>
          <Grid item>
          <Tabs
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            value={value}
            onChange={handleTabChange}
          >
            <Tab icon={<WorkIcon />}label="Cases" value={0} />
            <Tab icon={<SortIcon />} label="Rules" value={1}  />
            <Tab icon={<TimelineIcon />} label="Statistics" value={2} />
          </Tabs>
          </Grid>
        </Grid>
        {value === 0 && <CasesTable />}
      </Box>
    </div>
  );
}
