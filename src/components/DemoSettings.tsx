import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Popover from "@material-ui/core/Popover";
import Switch from "@material-ui/core/Switch";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import SettingsIcon from "@material-ui/icons/Settings";
import { Button, IconButton, Typography } from "@material-ui/core";

export default function DemoSettings(props: {
  themeName: string;
  showSampleComponents: boolean;
  showCarousel: boolean;
  showMocks: boolean;
  showThemeOptions: boolean;
  onDarkModeChange: () => void;
  onShowSampleComponents: () => void;
  onShowCarousel: () => void;
  onShowMocks: () => void;
  onShowThemeOptions: () => void;
}) {
  const {
    themeName,
    showSampleComponents,
    showCarousel,
    showMocks,
    showThemeOptions,
    onDarkModeChange,
    onShowSampleComponents,
    onShowCarousel,
    onShowMocks,
    onShowThemeOptions,
  } = props;

  function onClearCache() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <PopupState variant="popover">
      {(popupState: any) => (
        <div>
          <IconButton edge="end" color="inherit" aria-label="settings icon">
            <SettingsIcon fontSize="large" {...bindTrigger(popupState)} />
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
              style: { width: "300" },
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
                <Switch
                  onChange={onDarkModeChange}
                  checked={themeName === "dark"}
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemText primary="Show Mocks" />
                <Switch onChange={onShowMocks} checked={showMocks} />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemText primary="Show Carousel" />
                <Switch onChange={onShowCarousel} checked={showCarousel} />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemText primary="Show Theme Options" />
                <Switch
                  onChange={onShowThemeOptions}
                  checked={showThemeOptions}
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemText primary="Show Sample Components" />
                <Switch
                  onChange={onShowSampleComponents}
                  checked={showSampleComponents}
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={onClearCache}
                >
                  Clear Cache
                </Button>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemText>
                  <Typography variant="caption">Version</Typography>
                </ListItemText>
                <Typography variant="caption">0.0.1</Typography>
              </ListItem>
            </List>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
