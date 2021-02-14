import { Box, Button, FormControl, Grid, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";

interface ThemeOptionsProps {
  themeOptions: string;
}

export default function ThemeOptions({ themeOptions }: ThemeOptionsProps) {
  const jsonData = JSON.parse(themeOptions);

  const displayData = JSON.stringify(jsonData, null, 4).replace(
    /["{[,\}\]]/g,
    ""
  );

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
                  <Button variant="outlined" color="primary">
                    Save to Clipboard
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
