import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Popover from "@material-ui/core/Popover";
import Switch from "@material-ui/core/Switch";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import SettingsIcon from "@material-ui/icons/Settings";
import { IconButton, Typography } from "@material-ui/core";

export default function Settings(props: {
  themeName: string;
  onDarkModeChange: any;
}) {
  const { themeName, onDarkModeChange } = props;

  return (
    <PopupState variant="popover">
      {(popupState: any) => (
        <div>
          <IconButton edge="end" color="inherit">
            <SettingsIcon {...bindTrigger(popupState)} />
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            PaperProps={{
              style: { width: "25%" },
            }}
          >
            <List>
              <ListItem>
                <ListItemText primary="Current Theme" />
                <Typography variant="body2">{themeName}</Typography>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemText primary="Dark Mode" />
                <Switch onChange={onDarkModeChange} />
              </ListItem>
            </List>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
