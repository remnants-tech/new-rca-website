/**
  This is basic information section that is to be shared throughout the app

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 3/3/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {basicInformationSectionStyles} from '../styleConstants';

export const BasicInformationSection = props => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your basic information
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            First name
          </Typography>
          <TextField
            id={props.inputBasicInformationStates.firstName}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.firstName]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStates.firstName,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Last name
          </Typography>
          <TextField
            id={props.inputBasicInformationStates.lastName}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.lastName]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStates.lastName,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Preferred Name/Foreign Name
          </Typography>
          <TextField
            id={props.inputBasicInformationStates.koreanName}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.koreanName]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStates.koreanName,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Date of Birth
          </Typography>
          <TextField
            id={props.inputBasicInformationStates.dob}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.dob]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStates.dob,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Select Gender
          </Typography>
          <TextField
            id={props.inputBasicInformationStates.selectGender}
            className={props.classes.textField}
            select
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.selectGender]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStates.selectGender,false)}
            fullWidth
          >
            <MenuItem key="male" value="male">Male</MenuItem>
            <MenuItem key="female" value="female">Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Select Language
          </Typography>
          <TextField
            id={props.inputBasicInformationStates.selectPreferredLanguage}
            className={props.classes.textField}
            select
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.selectPreferredLanguage]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStates.selectPreferredLanguage,false)}
            fullWidth
          >
            <MenuItem key="english" value="english">English</MenuItem>
            <MenuItem key="korean" value="korean">Korean</MenuItem>
            <MenuItem key="chinese" value="chinese">Chinese</MenuItem>
          </TextField>
        </Grid>
      </Grid>
  )
}
