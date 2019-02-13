/**
  This is the billing address section in the second part of registration page

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  @date: 2/11/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

export const BillingAddressSection = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Billing Address
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={12}>
          <FormControlLabel
            control={
              <Checkbox
                value="Billing address is same as My address"
                color="primary"
              />
            }
            label="Would you like to save this card for the future?"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="firstName"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            autoComplete="expirationDate"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="Streetaddress"
            name="streetAddress"
            label="Street Address"
            fullWidth
            autoComplete="expirationDate"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="companyAptEtc"
            name="companyAptEtc"
            label="Company,Apt,Suit, Unit"
            fullWidth
            autoComplete="companyAptEtc"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="state"
            name="state"
            label="State"
            fullWidth
            autoComplete="state"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="postalCode"
            name="postalCode"
            label="Postal Code"
            fullWidth
            autoComplete="postalCode"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
