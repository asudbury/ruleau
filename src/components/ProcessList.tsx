import React from "react";
import {
  Select,
  MenuItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import BallotIcon from "@material-ui/icons/Ballot";

export default function ProcessList(): JSX.Element {
  return (
    <div>
      <FormControl
        variant="outlined"
        focused={true}
        margin="dense"
        size="small"
      >
        <InputLabel id="process">Process</InputLabel>
        <Select labelId="process" id="process" label="Process">
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
