import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { ListItemIcon } from "@material-ui/core";
import BallotIcon from "@material-ui/icons/Ballot";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GetProcessesSelector from "../services/selectors/GetProcessesSelector";
import { Process } from "../services/models/Process";
import useUrlManager from "../hooks/useUrlManager";

export default function ProcessList() {
  const [publicUrl, formattedProcessName] = useUrlManager();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [secondaryText, setSecondaryText] = useState(getProcessValue());

  const processes = GetProcessesSelector().payload as Array<Process>;

  function getProcessValue() {
    alert(formattedProcessName);
    return formattedProcessName;
  }

  function getFormattedValue(title: string) {
    return title.replace(new RegExp(" ", "g"), "-");
  }

  const handleClickListItem = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);

    const item = processes[index];

    if (item) {
      setSecondaryText(item.name);
      window.location.href =
        publicUrl + "/process/" + getFormattedValue(item.name);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" aria-label="Process list">
        <ListItem
          button
          aria-haspopup="true"
          onClick={(event) => handleClickListItem(event)}
        >
          <ListItemText primary="Process" secondary={secondaryText} />
          <ExpandMoreIcon />
        </ListItem>
      </List>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {processes.map((process, index) => (
          <MenuItem
            key={process.id}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <ListItemIcon>
                <BallotIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={process.name} />
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
