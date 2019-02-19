/**
   Component for second part of the registration page.

   @author: Jae Won Kwon <jaewonrt@gmail.com>
   date: 2/14/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {MainRCAOptionsSection} from './MainRCAOptionsSection';
import {PaymentSection} from './PaymentSection';
import {BillingAddressSection} from  './BillingAddressSection';
import Icon from '@material-ui/core/Icon';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { unstable_Box as Box } from '@material-ui/core/Box';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from '@material-ui/core/Grid';

const SecondPartButtons = (props) => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          onClick={props.handleButtonChange}
          fullWidth
          className={props.classes.backButton}
          >
          <ArrowBackIcon />
          Back
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          fullWidth
          className={props.classes.nextButton}
          >
          Complete Registration
          <ArrowForwardIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

// TODO: need to create terms and conditions and privacy policy and then link them.
const PrivacyPolicyTerms = () => {
  return (
    <Typography component="div">
        By clicking the Complete Registration button,
        you confirm that you have read and understood, and accept our Terms and Conditions and Privacy Policy
    </Typography>
  )
}

export const RegistrationSecondPart = (props) => {
  return (
    <React.Fragment>
      <MainRCAOptionsSection {...props} />
      <PaymentSection {...props} />
      <BillingAddressSection {...props} />
      <SecondPartButtons handleButtonChange = {props.handleButtonChange} classes={props.classes}/>
      <PrivacyPolicyTerms />
    </React.Fragment>
  )
}
