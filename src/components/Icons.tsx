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
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import NetworkWifiIcon from "@material-ui/icons/NetworkWifi";
import BorderColorIcon from "@material-ui/icons/BorderColor";

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
  tableCell: {
    fontSize: "12pt",
  },
}));

export default function Icons(): JSX.Element {
  const classes = useStyles();
  return (
    <Table style={{ width: "90%", margin: "auto" }} size="small">
      <TableRow>
        <TableCell className={classes.tableCell}>Ruleau Logo</TableCell>
        <TableCell>
          <LogoIcon fontSize="large" />
        </TableCell>
        <TableCell>Ruleau Branding</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={classes.tableCell}>Settings</TableCell>
        <TableCell>
          <SettingsIcon fontSize="large" />
        </TableCell>
        <TableCell>Ruleau Branding</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={classes.tableCell}>Account</TableCell>
        <TableCell>
          <AccountIcon fontSize="large" />
        </TableCell>
        <TableCell>Ruleau Branding</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={classes.tableCell}>Home</TableCell>
        <TableCell>
          <HomeIcon color="primary" />
        </TableCell>
        <TableCell>HomeIcon from @material-ui/icons/Home</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.tableCell}>Process</TableCell>
        <TableCell>
          <BallotIcon color="primary" />
        </TableCell>
        <TableCell>BallotIcon from @material-ui/icons/Ballot</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.tableCell}>Case</TableCell>
        <TableCell>
          <WorkIcon color="primary" />
        </TableCell>
        <TableCell>WorkIcon from @material-ui/icons/Work</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.tableCell}>Rule</TableCell>
        <TableCell>
          <SortIcon color="primary" />
        </TableCell>
        <TableCell>SortIcon from @material-ui/icons/Sort</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.tableCell}>Rule Warning</TableCell>
        <TableCell>
          <div className={classes.warning}>
            <WarningIcon />
          </div>
        </TableCell>
        <TableCell>WarningIcon from @material-ui/icons/Warning</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.tableCell}>Rule No Warning</TableCell>
        <TableCell>
          <div className={classes.success}>
            <DoneIcon />
          </div>
        </TableCell>
        <TableCell>DoneIcon from @material-ui/icons/Done</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.tableCell}>Override</TableCell>
        <TableCell>
          <SubjectIcon color="primary" />
        </TableCell>
        <TableCell>SubjectIcon from @material-ui/icons/Subject</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.tableCell}>Payload</TableCell>
        <TableCell>
          <GrainIcon color="primary" />
        </TableCell>
        <TableCell>GrainIcon from @material-ui/icons/Grain</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.tableCell}>Examples</TableCell>
        <TableCell>
          <FormatListNumberedIcon color="primary" />
        </TableCell>
        <TableCell>
          FormatListNumberedIcon from @material-ui/icons/FormatListNumbered
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.tableCell}>Testing</TableCell>
        <TableCell>
          <NetworkWifiIcon color="primary" />
        </TableCell>
        <TableCell>
          NetworkWifiIcon from @material-ui/icons/NetworkWifiIcon
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.tableCell}>Source Code</TableCell>
        <TableCell>
          <BorderColorIcon color="primary" />
        </TableCell>
        <TableCell>
          BorderColorIcon from @material-ui/icons/BorderColorIcon
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.tableCell}>Success</TableCell>
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
        <TableCell className={classes.tableCell}>Warning</TableCell>
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
        <TableCell className={classes.tableCell}>Error</TableCell>
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
        <TableCell className={classes.tableCell}>Log</TableCell>
        <TableCell>
          <EventNoteIcon color="primary" />
        </TableCell>
        <TableCell>EventNoteIcon from @material-ui/icons/EventNote</TableCell>
      </TableRow>
    </Table>
  );
}
