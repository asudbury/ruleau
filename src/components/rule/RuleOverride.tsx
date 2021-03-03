import React from "react";
import {
  Box,
  Button,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TextField,
} from "@material-ui/core";
import SubjectIcon from "@material-ui/icons/Subject";
import { logInfo } from "../../utils/Logger";
interface RuleOverrideProps {
  hasOverride: boolean;
  canBeOverridden: boolean;
  onSaveOverride: () => void;
  onRemoveOverride: () => void;
}

export default function RuleOverride({
  hasOverride,
  canBeOverridden,
  onSaveOverride,
  onRemoveOverride,
}: RuleOverrideProps) {
  logInfo("hasOverride=" + hasOverride);

  return (
    <Grid container spacing={1}>
      <Grid item xs={11}>
        <Typography>Override History</Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <SubjectIcon color="secondary" /> 01 Jan 2020
                </TableCell>
                <TableCell>Morgan Atkins</TableCell>
                <TableCell>lorem ipsum</TableCell>
                <TableCell>Applied</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <SubjectIcon color="secondary" /> 01 Apr 2020
                </TableCell>
                <TableCell>Lucy Cox</TableCell>
                <TableCell>lorem ipsum</TableCell>
                <TableCell>Removed</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={11}>
        <Typography gutterBottom>&nbsp;</Typography>
        <Typography gutterBottom>Override</Typography>
        <Typography gutterBottom variant="caption">
          Only override if customer is expecting income to raise in the near
          future
        </Typography>
        {!canBeOverridden && (
          <Box color="info.main">This Rule cannot be overridden</Box>
        )}
      </Grid>
      <Grid item xs={12}>
        {!hasOverride && canBeOverridden && (
          <div style={{ width: `100%` }}>
            <TextField
              label="Override Reason"
              multiline
              rows={6}
              variant="filled"
            />
          </div>
        )}
      </Grid>
      <Grid item xs={11}>
        {!hasOverride && canBeOverridden && (
          <div>
            <Button
              data-testid="closeCase"
              type="submit"
              variant="outlined"
              color="secondary"
              onClick={onSaveOverride}
            >
              Save Override
            </Button>
          </div>
        )}
        {hasOverride && canBeOverridden && (
          <Button
            data-testid="reopenCase"
            type="submit"
            variant="outlined"
            color="secondary"
            onClick={onRemoveOverride}
          >
            Remove Override
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
