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

const FIRST_PART_STATE = "firstPartStates";
const SECOND_PART_STATE = "secondPartStates";

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

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <React.Fragment >
          <RegistrationDrawer isFirstPage={this.state.isFirstPage} classes= {classes} />
          <div className={classes.toolbar} />
          <Paper className= {classes.paper}>
            <Typography component="h1" variant="h4" allign="center">Register for</Typography>
            <Typography component="h1" variant="h4" allign="center">College & Young Adults Conference</Typography>
              {this.state.isFirstPage ?
                <RegistrationFirstPart {...this.state[FIRST_PART_STATE]}
                  handleFieldInputChange= {this.handleFieldInputChange.bind(this)}
                  handleButtonChange= {this.handleRegistrationPageChange.bind(this)}
                  classes= {classes} /> :
                <RegistrationSecondPart {...this.state[SECOND_PART_STATE]}
                  handleFieldInputChange= {this.handleFieldInputChange.bind(this)}
                  handleButtonChange= {this.handleRegistrationPageChange.bind(this)}
                  classes= {classes} />
              }
          </Paper>
        </React.Fragment>
      </div>
    )
  }
}

export default withStyles(registrationCardStyles)(RegistrationCardComponent);
