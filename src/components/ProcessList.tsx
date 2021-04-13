import React from "react";
import {
  Select,
  MenuItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import BallotIcon from "@material-ui/icons/Ballot";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 400,
  },
  white: {
    color: "white",
  },
}));

export default function ProcessList(): JSX.Element {
  const classes = useStyles();
  const publicUrl = process.env.PUBLIC_URL;

  function handleSelectionChange() {
    window.location.href = publicUrl;
  }

  return (
    <div>
      <FormControl
        variant="outlined"
        focused={true}
        margin="dense"
        size="small"
        className={classes.formControl}
      >
        <InputLabel id="process" className={classes.white}>
          Process
        </InputLabel>
        <Select
          labelId="process"
          id="process"
          label="Process"
          className={classes.white}
          onClick={handleSelectionChange}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value="Platinum Credit Card">
            <div style={{ display: "flex", alignItems: "center" }}>
              <ListItemIcon>
                <BallotIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Platinum Credit Card" />
            </div>
          </MenuItem>
          <MenuItem value="Entry Level Credit Card">
            <div style={{ display: "flex", alignItems: "center" }}>
              <ListItemIcon>
                <BallotIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Entry Level Credit Card" />
            </div>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
