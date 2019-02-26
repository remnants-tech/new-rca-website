/**
  This is the email and password creation page.

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 2/23/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {createAccountFirstStepStyles} from '../styleConstants';
import {createAccountStateNames} from './CreateAccountConstants';

export const CreateAccountFirstStep = (props) => {
  return (
      <Grid container spacing={8}>
        <Grid item xs={12} sm={12}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Email
          </Typography>
          <TextField
            id={createAccountStateNames.email}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
            value={props[createAccountStateNames.email]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,createAccountStateNames.email,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Password
          </Typography>
          <TextField
            id={createAccountStateNames.password}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
            type={"password"}
            value={props[createAccountStateNames.password]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,createAccountStateNames.password,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Confirm Password
          </Typography>
          <TextField
            id={createAccountStateNames.confirmPassword}
            className={props.classes.textField}
            margin="normal"
            variant="outlined"
            type={"password"}
            value={props[createAccountStateNames.confirmPassword]}
            onChange={(newValue) => props.handleFieldInputChange(newValue,createAccountStateNames.confirmPassword,false)}
            fullWidth
          />
        </Grid>
      </Grid>
  )
}
