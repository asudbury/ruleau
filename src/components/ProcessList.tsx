import React, { useState } from "react";
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
import GetProcessesSelector from "../services/selectors/GetProcessesSelector";
import { Process } from "../services/models/Process";

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

  const parts = window.location.toString().split("/");

  let defaultValue = parts[5];

  if (!defaultValue) {
    defaultValue = "";
  }
  const [selectedProcess, setSelectedProcess] = useState(defaultValue);

  const publicUrl = process.env.PUBLIC_URL;

  const processes = GetProcessesSelector().payload as Array<Process>;

  function getFormattedValue(title: string) {
    return title.replace(new RegExp(" ", "g"), "-");
  }

  function handleSelectionChange(event: React.ChangeEvent<{ value: unknown }>) {
    if (event.target.value) {
      setSelectedProcess(event.target.value.toString());
      setTimeout(() => {
        window.location.href = publicUrl + "/process/" + event.target.value;
      }, 200);
    }
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
          value={selectedProcess}
          id="process"
          label="Process"
          className={classes.white}
          onChange={handleSelectionChange}
        >
          <MenuItem value=""></MenuItem>

          {processes.map((process, index) => (
            <MenuItem value={getFormattedValue(process.name)} key={process.id}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ListItemIcon>
                  <BallotIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={process.name} />
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
