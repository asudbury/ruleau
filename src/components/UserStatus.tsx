import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button, IconButton, Typography } from "@material-ui/core";
import createPersistedState from "use-persisted-state";

export default function UserStatus(props: {
  isLoggedIn: boolean;
  onLogout: () => void;
  onLogin: () => void;
}) {
  const { isLoggedIn, onLogout, onLogin } = props;

  const useEmailAddressState = createPersistedState("emailAddress");
  const [emailAddress] = useEmailAddressState("");

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
              {isLoggedIn && (
                <ListItem>
                  <ListItemText primary="Email Address" />
                  <Typography variant="body2">{emailAddress}</Typography>
                </ListItem>
              )}
            </List>
            <Divider />
            <List>
              {isLoggedIn && (
                <ListItem>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={onLogout}
                  >
                    Logout
                  </Button>
                </ListItem>
              )}
              {!isLoggedIn && (
                <ListItem>
                    Not logged In
                </ListItem>
              )}
            </List>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
