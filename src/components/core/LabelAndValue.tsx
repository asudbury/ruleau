import { Typography } from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";

interface LabelAndValueProps {
  variant: Variant;
  label: string;
  value: string;
}

export default function LabelAndValue({ variant, label, value } : LabelAndValueProps) {
  return (
    <div style={{ display: "flex", alignItems: "baseline" }}>
      <Typography variant={variant}>{label}:</Typography>
      <Typography variant={variant} style={{ marginLeft: 10 }}>
        {value}
      </Typography>
    </div>
  );
}
