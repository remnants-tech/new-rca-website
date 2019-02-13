/**
  This is field information section of registration components

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  @date: 2/10/2019

**/

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export const FieldInformationSection = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your field information
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="schoolName"
            name="schoolName"
            label="School"
            fullWidth
            autoComplete="school"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="gradeLevel"
            name="gradeLevel"
            label="Grade"
            fullWidth
            autoComplete="grade"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            optional
            id="major"
            name="major"
            label="Major"
            fullWidth
            autoComplete="major"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="select-area-of-interest"
            fullWidth
            select
            label="Select area of interest/specialty"
            helperText="Select your area of interest or specialty"
            >
            <MenuItem key="accounting" value="accounting">Accounting</MenuItem>
            <MenuItem key="finance" value="finance">Finance</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            optional
            id="company"
            name="company"
            label="Company"
            fullWidth
            autoComplete="company"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            optional
            id="title"
            name="title"
            label="Title (Company)"
            fullWidth
            autoComplete="company"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
