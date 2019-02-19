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

export const CreateAccountBasicInformationSection = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your basic information
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id={createAccountStateNames.firstName}
            name={createAccountStateNames.firstName}
            label="First name"
            fullWidth
            value={props[createAccountStateNames.firstName]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,createAccountStateNames.firstName, false)}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id={createAccountStateNames.lastName}
            name={createAccountStateNames.lastName}
            label="Last name"
            fullWidth
            value={props[createAccountStateNames.lastName]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,createAccountStateNames.lastName, false)}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            optional
            id={createAccountStateNames.koreanName}
            name={createAccountStateNames.koreanName}
            label="한국이름 Korean name (optional)"
            fullWidth
            value={props[createAccountStateNames.koreanName]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,createAccountStateNames.koreanName, false)}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id={createAccountStateNames.dob}
            label="Date of Birth"
            type="date"
            InputLabelProps={{
              shrink: true,}}
            value={props[createAccountStateNames.dob]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,createAccountStateNames.dob, false)}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id={createAccountStateNames.selectGender}
            select
            label="Select Gender"
            helperText="Select your gender"
            fullWidth
            value={props[createAccountStateNames.selectGender]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,createAccountStateNames.selectGender, false)}}
          >
            <MenuItem key="male" value="male">Male</MenuItem>
            <MenuItem key="female" value="female">Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id={createAccountStateNames.selectPreferredLanguage}
            select
            label="Select language"
            helperText="Select preferred language"
            value={props[createAccountStateNames.selectPreferredLanguage]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,createAccountStateNames.selectPreferredLanguage, false)}}
          >
            <MenuItem key="english" value="english">English</MenuItem>
            <MenuItem key="korean" value="korean">Korean</MenuItem>
            <MenuItem key="chinese" value="chinese">Chinese</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id={createAccountStateNames.phoneNumber}
            name={createAccountStateNames.phoneNumber}
            label="Phone number"
            fullWidth
            value={props[createAccountStateNames.phoneNumber]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,createAccountStateNames.phoneNumber, false)}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id={createAccountStateNames.selectAreaOfInterest}
            fullWidth
            select
            label="Select area of interest/specialty"
            helperText="Select your area of interest or specialty"
            value={props[createAccountStateNames.selectAreaOfInterest]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,createAccountStateNames.selectAreaOfInterest, false)}}
            >
            <MenuItem key="accounting" value="accounting">Accounting</MenuItem>
            <MenuItem key="finance" value="finance">Finance</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id={createAccountStateNames.selectYourChurch}
            fullWidth
            select
            label="Select your church name"
            helperText="Type in your church name below if you do not see your church in the dropdown"
            value={props[createAccountStateNames.selectYourChurch]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,createAccountStateNames.selectYourChurch, false)}}
            >
            {/* TODO: insert more church names and refactor if neccessary */}
            <MenuItem key="one-mind-church" value="one-mind-church">One Mind Church</MenuItem>
            <MenuItem key="boston-immanuel" value="boston-immanuel">Boston Immanuel</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            optional
            id={createAccountStateNames.typeInChurchName}
            name={createAccountStateNames.typeInChurchName}
            label="type your church name here"
            fullWidth
            value={props[createAccountStateNames.typeInChurchName]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,createAccountStateNames.typeInChurchName, false)}}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
