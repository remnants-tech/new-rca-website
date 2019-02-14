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
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';

const BackButton = (props) => {
  return (
    <Button variant="contained" color="primary" className= {props.styleInput} onChange={() => props.handleButtonChange}>
      <ArrowBackIosIcon />
      Back
    </Button>
  )
}

export const RegistrationSecondPart = (props) => {
  return (
    <React.Fragment>
      <MainRCAOptionsSection {...props} />
      <PaymentSection {...props} />
      <BillingAddressSection {...props} />
      <BackButton styleInput={props.styleInput} handleButtonChange = {() => props.handleButtonChange} />
    </React.Fragment>
  )
}
