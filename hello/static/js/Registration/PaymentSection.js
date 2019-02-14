/**
  This is the payment section in the second part of registration page

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 2/11/19
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
import {secondPartStateNames} from './RegistrationConstants'

export const PaymentSection = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Select payment method</FormLabel>
            <RadioGroup
              aria-label="paymentMethods"
              name={secondPartStateNames.paymentMethods}
              row
              value={props[secondPartStateNames.paymentMethods]}
              onChange={(newValue) => {props.handleFieldInputChange(newValue,secondPartStateNames.paymentMethods, true, false)}}
            >
            // TODO: add more methods if neccessary
              <FormControlLabel
                value="Credit/Debit Card"
                label="Credit/Debit Card"
                control={<Radio/>}
                labelPlacement="end"
              />
              <FormControlLabel
                value="Other methods if any"
                label="Other methods if any"
                control={<Radio/>}
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            id={secondPartStateNames.cardNumber}
            name={secondPartStateNames.cardNumber}
            label="Card number"
            fullWidth
            autoComplete="cardNumber"
            value={props[secondPartStateNames.cardNumber]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,secondPartStateNames.cardNumber, true, false)}}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id={secondPartStateNames.expirationDate}
            name={secondPartStateNames.expirationDate}
            label="Expiration Date"
            fullWidth
            autoComplete="expirationDate"
            value={props[secondPartStateNames.expirationDate]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,secondPartStateNames.expirationDate, true, false)}}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id={secondPartStateNames.securityCode}
            name={secondPartStateNames.securityCode}
            label="Security Code"
            fullWidth
            autoComplete="securityCode"
            value={props[secondPartStateNames.securityCode]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,secondPartStateNames.securityCode, true, false)}}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControlLabel
            control={
              <Checkbox
                value="Would you like to save this card for the future?"
                color="primary"
                checked={props[secondPartStateNames.saveCardCheckBox]}
                onChange={(newValue) => {props.handleFieldInputChange(newValue,secondPartStateNames.saveCardCheckBox, true, true)}}
              />
            }
            label="Would you like to save this card for the future?"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
