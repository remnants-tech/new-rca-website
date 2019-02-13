/**
  This is church information section of registration components

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  @date: 2/10/2019

**/

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export const ChurchInformationSection = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your church information
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="select-church-position"
            select
            label="Select your position in church"
            fullWidth
            >
            <MenuItem key="remnant" value="remnant">Remnant</MenuItem>
            <MenuItem key="deacon" value="deacon">Deacon</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="select-training-level"
            fullWidth
            select
            label="Select your training level"
            >
            <MenuItem key="first-level-camp" value="first-level-camp">1st Level Camp Training</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="select-church-name"
            fullWidth
            select
            label="Select your church name"
            helperText="Type in your church name below if you do not see your church in the dropdown"
            >
            <MenuItem key="one-mind-church" value="one-mind-church">One Mind Church</MenuItem>
            <MenuItem key="boston-immanuel" value="boston-immanuel">Boston Immanuel</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            optional
            id="type-in-church-name"
            name="church-name"
            label="type your church name here"
            fullWidth
            autoComplete="churchName"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
