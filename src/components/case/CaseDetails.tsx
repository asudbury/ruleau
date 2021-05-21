import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Box,
  Link,
} from "@material-ui/core";

import LabelAndValue from "../core/LabelAndValue";
import RuleauProgressButton from "../core/RuleauProgressButton";
import { CaseMockPayload } from "../../mockData/CaseMockPayload";
interface CaseDetailsProps {
  isClosed: boolean;
  onCloseCase: () => void;
  onReopenCase: () => void;
}

export default function CaseDetails({
  isClosed,
  onCloseCase,
  onReopenCase,
}: CaseDetailsProps): JSX.Element {
  const history = useHistory();

  const { caseId } = useParams<{ caseId: string }>();

  const [showPayload, setShowPayload] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleShowPayload() {
    setShowPayload(!showPayload);
  }

  function handleCloseCase() {
    setLoading(true);

    setTimeout(() => {
      onCloseCase();
      history.goBack();
    }, 1000);
  }

  function handleReopenCase() {
    setLoading(true);

    setTimeout(() => {
      onReopenCase();
      history.goBack();
    }, 1000);
  }

  function handleRuleDocumentation() {
    window.open(
      process.env.PUBLIC_URL + "/process/Platinum-Credit-Card/rules",
      "_blank"
    );
  }

  const payload = JSON.stringify(CaseMockPayload, null, 1);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <LabelAndValue variant="h6" label="Case ID" value={caseId} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <Typography variant="body1">Execution:</Typography>
          <Select value={3} style={{ marginLeft: 10 }}>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="1">1</MenuItem>
          </Select>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <LabelAndValue
          variant="body1"
          label="Processed On"
          value="12 July 2020 13:10"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LabelAndValue variant="body1" label="Name" value="Test Application" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LabelAndValue
          variant="body1"
          label="Date of Birth"
          value="03 March 1975"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        {!isClosed && (
          <RuleauProgressButton
            datatestid="closeCase"
            arialabel="Close Case Button"
            onClick={handleCloseCase}
            loading={loading}
            content="Close Case"
          />
        )}
        {isClosed && (
          <RuleauProgressButton
            datatestid="reopenCase"
            arialabel="Reopen Case Button"
            onClick={handleReopenCase}
            loading={loading}
            content="Reopen Case"
          />
        )}
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControlLabel
          control={
            <Switch checked={showPayload} onChange={handleShowPayload} />
          }
          label={<Typography variant="caption">Show Payload</Typography>}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link
          href="#"
          onClick={handleRuleDocumentation}
          color="textPrimary"
          style={{ textDecoration: "underline" }}
        >
          Rule Documentation
        </Link>
      </Grid>
      <Grid item xs={12} md={6}>
        {showPayload && (
          <Box
            fontFamily="Monospace"
            fontSize="h6.fontSize"
            border={1}
            p={1}
            style={{ maxHeight: 300, overflow: "auto" }}
          >
            <pre>{payload}</pre>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}
