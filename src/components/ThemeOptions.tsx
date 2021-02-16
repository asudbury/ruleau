import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

interface ThemeOptionsProps {
  themeOptions: string;
}

export default function ThemeOptions({ themeOptions }: ThemeOptionsProps) {
    
  const jsonData = JSON.parse(themeOptions);

  const [displayData, setDisplayData] = useState(JSON.stringify(jsonData, null, 4));

  function onCopyToClipboard() {
    navigator.clipboard.writeText(displayData);
  }

  function onThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDisplayData(e.target.value);
  }

  return (
    <div>
      <Box p={5}>
        <Grid container direction="row" spacing={5}>
          <Grid item>
            <Typography variant="h5">Theme Options</Typography>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              multiline
              defaultValue={displayData}
              value={displayData}
              onChange={onThemeChange}
              style={{ width: 1000 }}
            />
            <Box p={1}>
              <Grid container direction="row" spacing={1}>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Update Theme
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" onClick={onCopyToClipboard}>
                    Copy to Clipboard
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
