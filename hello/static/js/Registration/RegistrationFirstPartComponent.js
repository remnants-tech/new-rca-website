import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {FieldInformationSection} from './FieldInformationSection';
import {BasicInformationSection} from './BasicInformationSection';
import {ChurchInformationSection} from './ChurchInformationSection';
import Icon from '@material-ui/core/Icon';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const NextButton = (props) => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6}/>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          onClick={props.handleButtonChange}
          fullWidth
          className={props.classes.nextButton}
          >
          Next
          <ArrowForwardIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

export const RegistrationFirstPart = (props) => {
  return (
    <React.Fragment>
      <FieldInformationSection {...props} />
      <BasicInformationSection {...props}/>
      <ChurchInformationSection {...props}/>
      <NextButton handleButtonChange={props.handleButtonChange} classes={props.classes} />
    </React.Fragment>
  )
}
