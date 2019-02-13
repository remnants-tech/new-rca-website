import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {FieldInformationSection} from './FieldInformationSection';
import {BasicInformationSection} from './BasicInformationSection';
import {ChurchInformationSection} from './ChurchInformationSection';

export const RegistrationFirstPart = () => {
  return (
    <React.Fragment>
      <FieldInformationSection />
      <BasicInformationSection />
      <ChurchInformationSection />
    </React.Fragment>
  )
}
