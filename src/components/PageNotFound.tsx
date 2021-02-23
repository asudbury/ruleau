import React from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid, Box } from "@material-ui/core";

export default function PageNotFound() {
  const history = useHistory();

  function handleGoHome() {
    history.push("/");
  }

  return (
    <div>
      <Box p={5}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item xs={12}>
            <Typography variant="h3" color="primary" gutterBottom>
              Sorry
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              It seems like we couldn't find the page you were looking for
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              data-testid="goHomeButton"
              type="submit"
              variant="outlined"
              color="primary"
              onClick={handleGoHome}
            >
              Go Home
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
