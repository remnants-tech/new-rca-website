/**
  This is the content for edit profile tab

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 3/3/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DoneIcon from '@material-ui/icons/Done';
import Divider from '@material-ui/core/Divider';
import {BasicInformationSection, FieldInformationSection, ChurchInformationSection} from '../Utils/ReusableInputSections';


export const EditMyProfileTabContent = (props) => {
  return (
    <React.Fragment>
      <BasicInformationSection {...props} />
      <FieldInformationSection {...props} />
      <ChurchInformationSection {...props} />
    </React.Fragment>
  )
}
