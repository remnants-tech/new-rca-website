/**
  This is church information section of registration components

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 2/10/2019
**/

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {firstPartStateNames} from  './RegistrationConstants'

export const ChurchInformationSection = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your church information
      </Typography>
      // TODO: might want to store grid specs as constants for maintaining consistency
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
          <TextField
            id={firstPartStateNames.selectChurchPosition}
            select
            label="Select your position in church"
            fullWidth
            value={props[firstPartStateNames.selectChurchPosition]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.selectChurchPosition, true, false)}}
            >
            // TODO: insert more menu items and refactor if neccessary
            <MenuItem key="remnant" value="remnant">Remnant</MenuItem>
            <MenuItem key="deacon" value="deacon">Deacon</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          id={firstPartStateNames.selectTrainingLevel}
            fullWidth
            select
            label="Select your training level"
            value={props[firstPartStateNames.selectTrainingLevel]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.selectTrainingLevel, true, false)}}
            >
            // TODO: insert more menu items and refactor if neccessary
            <MenuItem key="first-level-camp" value="first-level-camp">1st Level Camp Training</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id={firstPartStateNames.selectChurchName}
            fullWidth
            select
            label="Select your church name"
            helperText="Type in your church name below if you do not see your church in the dropdown"
            value={props[firstPartStateNames.selectChurchName]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.selectChurchName, true, false)}}
            >
            // TODO: insert more church names and refactor if neccessary
            <MenuItem key="one-mind-church" value="one-mind-church">One Mind Church</MenuItem>
            <MenuItem key="boston-immanuel" value="boston-immanuel">Boston Immanuel</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            optional
            id={firstPartStateNames.typeInChurchName}
            name={firstPartStateNames.typeInChurchName}
            label="type your church name here"
            fullWidth
            value={props[firstPartStateNames.typeInChurchName]}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,firstPartStateNames.typeInChurchName, true, false)}}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
