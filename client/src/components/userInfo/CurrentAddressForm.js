import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CurrentAddressForm() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="same as permanent Address"
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
}
