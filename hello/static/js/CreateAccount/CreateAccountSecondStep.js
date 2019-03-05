/**
  Basic information input section of the create account page.

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 2/16/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {createAccountStateNames} from './CreateAccountConstants';

// TODO: need to select which fields count as required which are optional

export const CreateAccountSecondStep = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your basic information
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            {createAccountStateNames.firstName}
          </Typography>
          <TextField
            id={createAccountStateNames.firstName}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
            value={props[createAccountStateNames.firstName]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,createAccountStateNames.firstName,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            {createAccountStateNames.lastName}
          </Typography>
          <TextField
            id={createAccountStateNames.lastName}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
            value={props[createAccountStateNames.lastName]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,createAccountStateNames.lastName,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Preferred Name/Foreign Name
          </Typography>
          <TextField
            id={createAccountStateNames.koreanName}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
            value={props[createAccountStateNames.koreanName]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,createAccountStateNames.koreanName,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Date of Birth
          </Typography>
          <TextField
            id={createAccountStateNames.dob}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
            value={props[createAccountStateNames.dob]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,createAccountStateNames.dob,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Select Gender
          </Typography>
          <TextField
            id={createAccountStateNames.selectGender}
            className={props.classes.textField}
            select
            margin="normal"
            variant="outlined"
            value={props[createAccountStateNames.selectGender]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,createAccountStateNames.selectGender,false)}
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
            id={createAccountStateNames.selectPreferredLanguage}
            className={props.classes.textField}
            select
            margin="normal"
            variant="outlined"
            value={props[createAccountStateNames.selectPreferredLanguage]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,createAccountStateNames.selectPreferredLanguage,false)}
            fullWidth
          >
            <MenuItem key="english" value="english">English</MenuItem>
            <MenuItem key="korean" value="korean">Korean</MenuItem>
            <MenuItem key="chinese" value="chinese">Chinese</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Phone Number
          </Typography>
          <TextField
            id={createAccountStateNames.phoneNumber}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
            value={props[createAccountStateNames.phoneNumber]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,createAccountStateNames.phoneNumber,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Select Your Area Of Interest or Specialty
          </Typography>
          <TextField
            id={createAccountStateNames.selectAreaOfInterest}
            className={props.classes.textField}
            select
            margin="normal"
            variant="outlined"
            value={props[createAccountStateNames.selectAreaOfInterest]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,createAccountStateNames.selectAreaOfInterest,false)}
            fullWidth
          >
            <MenuItem key="accounting" value="accounting">Accounting</MenuItem>
            <MenuItem key="finance" value="finance">Finance</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Select Your Church
          </Typography>
          <TextField
            id={createAccountStateNames.selectYourChurch}
            className={props.classes.textField}
            select
            margin="normal"
            variant="outlined"
            value={props[createAccountStateNames.selectYourChurch]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,createAccountStateNames.selectYourChurch,false)}
            fullWidth
          >
            {/* TODO: insert more church names and refactor if neccessary */}
            <MenuItem key="one-mind-church" value="one-mind-church">One Mind Church</MenuItem>
            <MenuItem key="boston-immanuel" value="boston-immanuel">Boston Immanuel</MenuItem>
            <MenuItem key="not-listed" value="not-listed">Not listed here</MenuItem>
          </TextField>
        </Grid>
        {
          (props[createAccountStateNames.selectYourChurch] === "not-listed") &&
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle1" className={props.classes.subHeading}>
              Type In Your Church Name
            </Typography>
            <TextField
              id={createAccountStateNames.typeInChurchName}
              className={props.classes.textField}
              margin="normal"
              variant="outlined"
              value={props[createAccountStateNames.typeInChurchName]}
              onChange={(newValue) => props.handleFieldInputChange(newValue,createAccountStateNames.typeInChurchName,false)}
              fullWidth
            />
          </Grid>
        }
      </Grid>
    </React.Fragment>
  )
}
