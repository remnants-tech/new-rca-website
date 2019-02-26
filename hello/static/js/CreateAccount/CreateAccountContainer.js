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
import {CreateAccountBasicInformationSection} from './CreateAccountFirstStep';
import Button from '@material-ui/core/Button';
import {createAccountStates} from './CreateAccountConstants';
import Icon from '@material-ui/core/Icon';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CssBaseline from '@material-ui/core/CssBaseline';
import {CreateAccountFirstStep} from './CreateAccountFirstStep';
import {CreateAccountSecondStep} from './CreateAccountSecondStep';
import Grid from '@material-ui/core/Grid';
import {CreateAccountDrawer} from './CreateAccountDrawer';

const EMAIL_PASSWORD_PAGE = 1;
const GENERAL_INFORMATION_PAGE = 2;

const SecondStepButtons = (props) => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          onClick={() => props.handleButtonChange(false)}
          fullWidth
          className={props.classes.backButton}
          >
          <ArrowBackIcon />
          Back
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          fullWidth
          className={props.classes.nextButton}
          >
          Sign up
          <ArrowForwardIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

const NextButton = (props) => {
  return (
    <Button
      variant="contained"
      onClick={() => props.handleButtonChange(true)}
      fullWidth
      className={props.classes.nextButton}
      >
      Next
      <ArrowForwardIcon />
    </Button>
  )
}

class CreateAccountContainer extends React.Component {
  state = {
    formInputStates: {...createAccountStates},
    currentStep: EMAIL_PASSWORD_PAGE
  }

  handleFieldInputChange = (newValue, id, isCheckBox) => {
    this.setState({
      formInputStates: {
        ...this.state.formInputStates,
        [id]: (isCheckBox ? newValue.target.checked : newValue.target.value)
      }
    })
  }

  handleButtonChange = (isForward) => {
    this.setState({currentStep: isForward ? GENERAL_INFORMATION_PAGE : EMAIL_PASSWORD_PAGE});
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <React.Fragment>
          <CreateAccountDrawer isFirstStep={this.state.currentStep === EMAIL_PASSWORD_PAGE} classes= {classes} />
          <div className={classes.toolbar} />
          <Paper className= {classes.paper}>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={this.state.currentStep === EMAIL_PASSWORD_PAGE ? 5 : 8}>
                <Typography component="h1" variant="h4" allign="center" className= {classes.createAccountHeading}>
                  Create an account
                </Typography>
                {this.state.currentStep == EMAIL_PASSWORD_PAGE &&
                  <React.Fragment>
                    <CreateAccountFirstStep
                      {...this.state.formInputStates}
                      {...this.props}
                      handleFieldInputChange={this.handleFieldInputChange.bind(this)}
                    />
                  <NextButton classes={classes} handleButtonChange={this.handleButtonChange.bind(this)}/>
                  </React.Fragment>
                }
                {
                  this.state.currentStep == GENERAL_INFORMATION_PAGE &&
                    <React.Fragment>
                      <CreateAccountSecondStep
                        {...this.state.formInputStates}
                        {...this.props}
                        handleFieldInputChange={this.handleFieldInputChange.bind(this)}
                      />
                    <SecondStepButtons classes={classes} handleButtonChange={this.handleButtonChange.bind(this)}/>
                    </React.Fragment>
                }
                </Grid>
                <Grid item xs={12} sm={this.state.currentStep === EMAIL_PASSWORD_PAGE ? 6 : 3} />
            </Grid>
          </Paper>
        </React.Fragment>
      </div>
    )
  }
}

export default withStyles(registrationCardStyles)(CreateAccountContainer);
