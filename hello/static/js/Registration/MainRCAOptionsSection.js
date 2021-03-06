/**
  This is the main RCA option section in the second part of registration page

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  @date: 2/11/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export const MainRCAOptionsSection = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Main RCA Options
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Lodging options</FormLabel>
            <RadioGroup
              aria-label="LodgingOptions"
              name="lodgingOptions"
              >
              <FormControlLabel value="fourPeopleRoom" control={<Radio/>} label="4 people room" />
              <FormControlLabel value="twoPeopleRoom" control={<Radio/>} label="2 people room" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="select-shirt-size"
            select
            label="Select T-shirt size"
            fullWidth
            >
            <MenuItem key="small" value="small">Small</MenuItem>
            <MenuItem key="medium" value="medium">Medium</MenuItem>
            <MenuItem key="large" value="large">Large</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="select-volunteer-option"
            select
            label="Volunteer to serve as a staff"
            fullWidth
            >
            <MenuItem key="yes" value="yes">Yes, I'd like to volunteer</MenuItem>
            <MenuItem key="no" value="no">No, I don't want to volunteer</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="healthCondition"
            name="healthCondition"
            label="Health Condition"
            fullWidth
            autoComplete="healthCondition"
            helperText="Tell us if you have special condition"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="prayerTopic"
            name="prayerTopic"
            label="Prayer Topic"
            fullWidth
            autoComplete="prayerTopic"
            helperText="Write your prayer topic"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
