import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export default function AddPaymentForm() {
  const [isPaymentDataAvailable, setIsPaymentDataAvailable] = useState(false);
  const [isFormDataEditable, setIsFormDataEditable] = useState(false);

  useEffect(() => {
    if (false) {
      setIsPaymentDataAvailable(true);
    } else {
      setIsPaymentDataAvailable(false);
      setIsFormDataEditable(true);
    }
  }, []);

  const handleChangeFormEditable = () => {
    setIsFormDataEditable(true);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add Payment Details
      </Typography>
      <Grid container spacing={3} style={{ width: "50%" }}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            disabled={!isFormDataEditable}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            disabled={!isFormDataEditable}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            disabled={!isFormDataEditable}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            disabled={!isFormDataEditable}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {isPaymentDataAvailable && (
            <Button
              variant="contained"
              disabled={!isPaymentDataAvailable}
              onClick={handleChangeFormEditable}
            >
              Edit Deatils
            </Button>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            disabled={!isFormDataEditable}
          >
            {isPaymentDataAvailable ? "Update Details" : "Add Details"}
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
