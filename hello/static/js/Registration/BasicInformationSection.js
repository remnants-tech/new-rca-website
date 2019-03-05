/**
  Basic Information Section component of registration card components

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  @date: 2/10/2019
*/
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {firstPartStateNames} from './RegistrationConstants';

export const BasicInformationSection = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={props.classes.sectionHeading}>
        Your basic information
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id= {firstPartStateNames.firstName}
            name={firstPartStateNames.firstName}
            label="First name"
            fullWidth
            autoComplete="firstName"
            value={props[firstPartStateNames.firstName]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.firstName, true, false)}}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id={firstPartStateNames.lastName}
            name={firstPartStateNames.lastName}
            label="Last name"
            fullWidth
            value={props[firstPartStateNames.lastName]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.lastName, true, false)}}
            className={props.classes.textField}
            variant="outlined"
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            optional
            id={firstPartStateNames.koreanName}
            name={firstPartStateNames.koreanName}
            label="한국이름 Korean name (optional)"
            fullWidth
            value={props[firstPartStateNames.koreanName]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.koreanName, true, false)}}
            className={props.classes.textField}
            variant="outlined"
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id={firstPartStateNames.dob}
            fullWidth
            label="Date of Birth"
            type="date"
            value={props[firstPartStateNames.dob]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.dob, true, false)}}
            InputLabelProps={{
              shrink: true,}}
            className={props.classes.textField}
            variant="outlined"
            margin="normal"
              />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id={firstPartStateNames.selectGender}
            select
            label="Select Gender"
            fullWidth
            value={props[firstPartStateNames.selectGender]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.selectGender, true, false)}}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
            >
            <MenuItem key="male" value="male">Male</MenuItem>
            <MenuItem key="female" value="female">Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id={firstPartStateNames.selectLanguage}
            select
            fullWidth
            label="Select language"
            value={props[firstPartStateNames.selectLanguage]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.selectLanguage, true, false)}}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
            >
            <MenuItem key="english" value="english">English</MenuItem>
            <MenuItem key="korean" value="korean">Korean</MenuItem>
            <MenuItem key="chinese" value="chinese">Chinese</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
