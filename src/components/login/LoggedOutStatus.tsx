import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button, IconButton } from "@material-ui/core";

export default function LoggedOutStatus(props: {
  onLogin: () => void;
}) {
  const { onLogin } = props;

  return (
    <PopupState variant="popover">
      {(popupState: any) => (
        <div>
          <IconButton edge="end" color="inherit">
            <AccountCircleIcon fontSize="large" {...bindTrigger(popupState)} />
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
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={onLogin}
                  >
                    Login
                  </Button>
                </ListItem>
            </List>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
