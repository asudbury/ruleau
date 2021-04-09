import React from "react";
import {
  Select,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

export default function ProcessList(): JSX.Element {
  return (
    <Select value="Select Process">
      <MenuItem value="Select Process">
        <ListItemText primary="Select Process" />
      </MenuItem>
      <MenuItem value="Platinum Credit Card">
        <div style={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="Platinum Credit Card" />
        </div>
      </MenuItem>
      <MenuItem value="Entry Level Credit Card">
        <div style={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="Entry Level Credit Card" />
        </div>
      </MenuItem>
    </Select>
  );
}
