import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {registrationCardStyles} from '../styleConstants'
import {CreateAccountBasicInformationSection} from './CreateAccountBasicInformationSection';
import Button from '@material-ui/core/Button';

class CreateAccountContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className= {classes.paper}>
          <Typography component="h1" variant="h4" allign="center">
            Create an account
          </Typography>
          <CreateAccountBasicInformationSection />
          <Button>Sign up </Button>
        </Paper>
      </React.Fragment>
    )
  }
}

export default withStyles(registrationCardStyles)(CreateAccountContainer);
