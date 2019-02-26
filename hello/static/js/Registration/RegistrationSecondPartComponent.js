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



export const RegistrationSecondPart = (props) => {
  return (
    <React.Fragment>
      <MainRCAOptionsSection {...props} />
      <PaymentSection {...props} />
      <BillingAddressSection {...props} />
    </React.Fragment>
  )
}
