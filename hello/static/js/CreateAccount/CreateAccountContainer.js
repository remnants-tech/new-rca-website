/**
  Container for the create account page

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 2/16/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {registrationCardStyles} from '../styleConstants'
import {CreateAccountBasicInformationSection} from './CreateAccountBasicInformationSection';
import Button from '@material-ui/core/Button';
import {createAccountStates} from './CreateAccountConstants';
import Icon from '@material-ui/core/Icon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const SignUpButton = (props) => {
  return (
    <Button variant="contained" color="primary" className= {props.styleInput} fullWidth>
      Sign up
      <ArrowForwardIosIcon />
    </Button>
  )
}

class CreateAccountContainer extends React.Component {
  state = {
    formInputStates: {...createAccountStates}
  }

  handleFieldInputChange = (newValue, id, isCheckBox) => {
    this.setState({
      formInputStates: {
        ...this.state.formInputStates,
        [id]: (isCheckBox ? newValue.target.checked : newValue.target.value)
      }
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className= {classes.paper}>
          <Typography component="h1" variant="h4" allign="center">
            Create an account
          </Typography>
          <CreateAccountBasicInformationSection
            {...this.state.formInputStates}
            handleFieldInputChange={this.handleFieldInputChange.bind(this)}
            />
          <SignUpButton />
        </Paper>
      </React.Fragment>
    )
  }
}

export default withStyles(registrationCardStyles)(CreateAccountContainer);
