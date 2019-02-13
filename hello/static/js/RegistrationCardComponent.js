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
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const NextButton = (styleInput, handleForward) => {
  return (
    <Button variant="contained" color="primary" className= {styleInput} onClick={() => handleForward}>
      Next
      <ArrowForwardIosIcon />
    </Button>
  )
}

const BackButton = (styleInput, handleBack) => {
  return (
    <Button variant="contained" color="primary" className= {styleInput} onClick={() => handleBack}>
      <ArrowBackIosIcon />
      Back
    </Button>
  )
}

class RegistrationCardComponent extends React.Component {
  state = {
    isFirstPage: true
  }

  handleForward = () => {
    this.setState({isFirstPage:false});
  }

  handleBack = () => {
    this.setState({isFirstPage:true});
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className= {classes.paper}>
          <Typography component="h1" variant="h4" allign="center">
            Register for Remnant Conference of America
          </Typography>
          {this.state.isFirstPage ? <RegistrationFirstPart /> : <RegistrationSecondPart />}
          {this.state.isFirstPage ?
            (<Button variant="contained" color="primary" className= {classes.nextButton} onClick={this.handleForward.bind(this)} >
              Next
              <ArrowForwardIosIcon />
            </Button>) :
            (
              <Button variant="contained" color="primary" className= {classes.nextButton} onClick={this.handleBack.bind(this)}>
                <ArrowBackIosIcon />
                Back
              </Button>
            )
          }
        </Paper>
      </React.Fragment>
    )
  }
}

export default withStyles(registrationCardStyles)(RegistrationCardComponent);
