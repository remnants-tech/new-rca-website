/**
  This is the billing address section in the second part of registration page

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

// TODO: change the stylistic layout so it looks more like the sample received
export const BillingAddressSection = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={props.classes.sectionHeading}>
        Billing Address
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={12}>
          <FormControlLabel
            control={
              <Checkbox
                value="Billing address is same as My address"
                color="primary"
                checked={props[secondPartStateNames.billingAddressCheckBox]}
                onChange={(newValue) => {props.handleFieldInputChange(newValue,secondPartStateNames.billingAddressCheckBox, false, true)}}
              />
            }
            label="Billing address is same as My address"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id={secondPartStateNames.billingAddressFirstName}
            name={secondPartStateNames.billingAddressFirstName}
            label="First name"
            fullWidth
            value={props[secondPartStateNames.billingAddressFirstName]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,secondPartStateNames.billingAddressFirstName, false, false)}}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id={secondPartStateNames.billingAddressLastName}
            name={secondPartStateNames.billingAddressLastName}
            label="Last Name"
            fullWidth
            value={props[secondPartStateNames.billingAddressLastName]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,secondPartStateNames.billingAddressLastName, false, false)}}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id={secondPartStateNames.billingAddressStreetAddress}
            name={secondPartStateNames.billingAddressStreetAddress}
            label="Street Address"
            fullWidth
            value={props[secondPartStateNames.billingAddressStreetAddress]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,secondPartStateNames.billingAddressStreetAddress, false, false)}}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id={secondPartStateNames.billingAddressCompanyAptEtc}
            name={secondPartStateNames.billingAddressCompanyAptEtc}
            label="Company,Apt,Suit, Unit"
            fullWidth
            value={props[secondPartStateNames.billingAddressCompanyAptEtc]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,secondPartStateNames.billingAddressStreetAddress, false, false)}}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id={secondPartStateNames.billingAddressCity}
            name={secondPartStateNames.billingAddressCity}
            label="City"
            fullWidth
            value={props[secondPartStateNames.billingAddressCity]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,secondPartStateNames.billingAddressCity, false, false)}}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id={secondPartStateNames.billingAddressState}
            name={secondPartStateNames.billingAddressState}
            label="State"
            fullWidth
            value={props[secondPartStateNames.billingAddressState]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,secondPartStateNames.billingAddressState, false, false)}}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id={secondPartStateNames.billingAddressPostalCode}
            name={secondPartStateNames.billingAddressPostalCode}
            label="Postal Code"
            fullWidth
            value={props[secondPartStateNames.billingAddressPostalCode]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,secondPartStateNames.billingAddressPostalCode, false, false)}}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
