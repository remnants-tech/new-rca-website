import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {MainRCAOptionsSection} from './MainRCAOptionsSection';
import {PaymentSection} from './PaymentSection';
import {BillingAddressSection} from  './BillingAddressSection';

export const RegistrationSecondPart = () => {
  return (
    <React.Fragment>
      <MainRCAOptionsSection />
      <PaymentSection />
      <BillingAddressSection />
    </React.Fragment>
  )
}
