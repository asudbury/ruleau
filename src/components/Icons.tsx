import React from "react";
import { makeStyles, Table, TableCell, TableRow } from "@material-ui/core";
import LogoIcon from "./icons/LogoIcon";
import SettingsIcon from "./icons/SettingsIcon";
import AccountIcon from "./icons/AccountIcon";
import HomeIcon from "@material-ui/icons/Home";
import BallotIcon from "@material-ui/icons/Ballot";
import WorkIcon from "@material-ui/icons/Work";
import SortIcon from "@material-ui/icons/Sort";
import SubjectIcon from "@material-ui/icons/Subject";
import GrainIcon from "@material-ui/icons/Grain";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import WarningIcon from "@material-ui/icons/Warning";
import DoneIcon from "@material-ui/icons/Done";
import EventNoteIcon from "@material-ui/icons/EventNote";

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.palette.error.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
  success: {
    color: theme.palette.success.main,
  },
}));

export default function Icons(): JSX.Element {
  const classes = useStyles();
  return (
    <Table style={{ width: 1000, margin: "auto" }} size="small">
      <TableRow>
        <TableCell>Ruleau Logo</TableCell>
        <TableCell>
          <LogoIcon fontSize="large" />
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Settings</TableCell>
        <TableCell>
          <SettingsIcon fontSize="large" />
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Account</TableCell>
        <TableCell>
          <AccountIcon fontSize="large" />
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Home</TableCell>
        <TableCell>
          <HomeIcon color="primary" />
        </TableCell>
        <TableCell>HomeIcon from @material-ui/icons/Home</TableCell>
      </TableRow>

      <TableRow>
        <TableCell>Process</TableCell>
        <TableCell>
          <BallotIcon color="primary" />
        </TableCell>
        <TableCell>BallotIcon from @material-ui/icons/Ballot</TableCell>
      </TableRow>

      <TableRow>
        <TableCell>Case</TableCell>
        <TableCell>
          <WorkIcon color="primary" />
        </TableCell>
        <TableCell>WorkIcon from @material-ui/icons/Work</TableCell>
      </TableRow>

      <TableRow>
        <TableCell>Rule</TableCell>
        <TableCell>
          <SortIcon color="primary" />
        </TableCell>
        <TableCell>SortIcon from @material-ui/icons/Sort</TableCell>
      </TableRow>

      <TableRow>
        <TableCell>Rule Warning</TableCell>
        <TableCell>
          <div className={classes.warning}>
            <WarningIcon />
          </div>
        </TableCell>
        <TableCell>WarningIcon from @material-ui/icons/Warning</TableCell>
      </TableRow>

      <TableRow>
        <TableCell>Rule No Warning</TableCell>
        <TableCell>
          <DoneIcon />
        </TableCell>
        <TableCell>DoneIcon from @material-ui/icons/Done</TableCell>
      </TableRow>

      <TableRow>
        <TableCell>Override</TableCell>
        <TableCell>
          <SubjectIcon color="primary" />
        </TableCell>
        <TableCell>SubjectIcon from @material-ui/icons/Subject</TableCell>
      </TableRow>

      <TableRow>
        <TableCell>Payload</TableCell>
        <TableCell>
          <GrainIcon color="primary" />
        </TableCell>
        <TableCell>GrainIcon from @material-ui/icons/Grain</TableCell>
      </TableRow>

      <TableRow>
        <TableCell>Success</TableCell>
        <TableCell>
          <div className={classes.success}>
            <CheckCircleOutlineOutlinedIcon />
          </div>
        </TableCell>
        <TableCell>
          CheckCircleOutlineOutlinedIcon from
          @material-ui/icons/CheckCircleOutlineOutlined
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell>Warning</TableCell>
        <TableCell>
          <div className={classes.warning}>
            <ReportProblemOutlinedIcon />
          </div>
        </TableCell>
        <TableCell>
          ReportProblemOutlinedIcon from
          @material-ui/icons/ReportProblemOutlined
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell>Error</TableCell>
        <TableCell>
          <div className={classes.error}>
            <HighlightOffOutlinedIcon />
          </div>
        </TableCell>
        <TableCell>
          HighlightOffOutlinedIcon from @material-ui/icons/HighlightOffOutlined
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell>Log</TableCell>
        <TableCell>
          <EventNoteIcon color="primary" />
        </TableCell>
        <TableCell>EventNoteIcon from @material-ui/icons/EventNote</TableCell>
      </TableRow>
    </Table>
  );
}
