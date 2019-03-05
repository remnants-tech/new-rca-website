/**
   Registration card component of registration page.

   @author: Jae Won Kwon <jaewonrt@gmail.com>
   date: 2/14/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {registrationCardStyles} from './styleConstants'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {RegistrationSecondPart} from './Registration/RegistrationSecondPartComponent';
import {RegistrationFirstPart} from './Registration/RegistrationFirstPartComponent';
import {firstPartStates} from './Registration/RegistrationConstants';
import {secondPartStates} from './Registration/RegistrationConstants';
import {RegistrationDrawer} from './Registration/RegistrationDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const FIRST_PART_STATE = "firstPartStates";
const SECOND_PART_STATE = "secondPartStates";

const SecondPartButtons = (props) => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          onClick={props.handleButtonChange}
          fullWidth
          className={props.classes.backButton}
          >
          <ArrowBackIcon />
          Back
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          onClick={props.handleRegistrationPost}
          variant="contained"
          fullWidth
          className={props.classes.nextButton}
          >
          Complete Registration
          <ArrowForwardIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

// TODO: need to create terms and conditions and privacy policy and then link them.
const PrivacyPolicyTerms = () => {
  return (
    <Typography component="div">
        By clicking the Complete Registration button,
        you confirm that you have read and understood, and accept our Terms and Conditions and Privacy Policy
    </Typography>
  )
}

class RegistrationCardComponent extends React.Component {
  state = {
    isFirstPage: true,
    firstPartStates,
    secondPartStates
  }

  handleRegistrationPageChange = () => {
    this.setState((prevState) => {return {isFirstPage: !prevState.isFirstPage}});
  }

  handleFieldInputChange = (newValue, id, isFirstPart, isCheckBox) => {
    const pageState = isFirstPart ? FIRST_PART_STATE : SECOND_PART_STATE;
    this.setState({
      [pageState]: {
        ...this.state[pageState],
        [id]: (isCheckBox ? newValue.target.checked : newValue.target.value)
      }
    })
  }

handleRegistrationPost = () => {
  console.log("here");
  return (
    fetch("http://localhost:8000/api/event/1/register", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...this.state.firstPartStates,...this.state.secondPartStates})
    })
  )}


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <React.Fragment >
          <RegistrationDrawer isFirstPage={this.state.isFirstPage} classes= {classes} />
          <div className={classes.toolbar} />
          <Paper className= {classes.paper}>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={10}>
                <Typography component="h1" variant="h4" allign="center">Register for</Typography>
                <Typography component="h1" variant="h4" allign="center">College & Young Adults Conference</Typography>
                  {this.state.isFirstPage ?
                    <RegistrationFirstPart {...this.state[FIRST_PART_STATE]}
                      handleFieldInputChange= {this.handleFieldInputChange.bind(this)}
                      handleButtonChange= {this.handleRegistrationPageChange.bind(this)}
                      classes= {classes} /> :
                    <React.Fragment>
                      <RegistrationSecondPart {...this.state[SECOND_PART_STATE]}
                        handleFieldInputChange= {this.handleFieldInputChange.bind(this)}
                        handleButtonChange= {this.handleRegistrationPageChange.bind(this)}
                        classes= {classes} />
                      <SecondPartButtons
                        handleButtonChange = {this.handleRegistrationPageChange.bind(this)}
                        classes={classes}
                        handleRegistrationPost = {this.handleRegistrationPost.bind(this)}
                        />
                      <PrivacyPolicyTerms />
                    </React.Fragment>
                  }
              </Grid>
              <Grid item xs={12} sm={1} />
            </Grid>
          </Paper>
        </React.Fragment>
      </div>
    )
  }
}

export default withStyles(registrationCardStyles)(RegistrationCardComponent);
