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

export const BasicInformationSection = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your basic information
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="firstName"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lastName"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            optional
            id="koreanName"
            name="koreanName"
            label="한국이름 Korean name (optional)"
            fullWidth
            autoComplete="krnName"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="date"
            label="Date of Birth"
            type="date"
            defaultValue="2018-02-10"
            InputLabelProps={{
              shrink: true,}}
              />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="select-gender"
            select
            label="Select Gender"
            helperText="Select your gender"
            fullWidth
            >
            <MenuItem key="male" value="male">Male</MenuItem>
            <MenuItem key="female" value="female">Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="select-language"
            select
            label="Select language"
            helperText="Select preferred language"
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
