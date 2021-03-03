import React from "react";
import { Box, Button, Grid } from "@material-ui/core";
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
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        {!canBeOverridden && (
          <Box color="info.main">This Rule cannot be overridden</Box>
        )}
        {!hasOverride && canBeOverridden && (
          <Button
            data-testid="closeCase"
            type="submit"
            variant="outlined"
            color="secondary"
            onClick={onSaveOverride}
          >
            Save Override
          </Button>
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
