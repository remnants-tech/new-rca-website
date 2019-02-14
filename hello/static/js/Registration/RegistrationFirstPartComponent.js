import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {FieldInformationSection} from './FieldInformationSection';
import {BasicInformationSection} from './BasicInformationSection';
import {ChurchInformationSection} from './ChurchInformationSection';
import Icon from '@material-ui/core/Icon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';

const NextButton = (props) => {
  return (
    <Button variant="contained" color="primary" className= {props.styleInput} onChange={() => props.handleButtonChange}>
      Next
      <ArrowForwardIosIcon />
    </Button>
  )
}

export const RegistrationFirstPart = (props) => {
  return (
    <React.Fragment>
      <FieldInformationSection {...props} />
      <BasicInformationSection {...props}/>
      <ChurchInformationSection {...props}/>
      <NextButton styleInput={props.styleInput} handleChange={() => props.handleChange} />
    </React.Fragment>
  )
}
