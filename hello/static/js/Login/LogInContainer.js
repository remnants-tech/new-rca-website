/**
  This is the container for log in page.

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 2/20/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {logInStyles} from '../styleConstants';
import {LogInCardComponent} from './LogInCardComponent';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';

class LogInContainer extends React.Component {
  state = {
    showPassword: false,
    email: "",
    password: "",
    rememberMeCheckbox:false
  }

  handleShowPassword = () => {
    this.setState(
      (prevState) => {
        return {showPassword: !prevState.showPassword};
      }
    )
  }

  handleFieldInputChange = (newValue, id, isCheckBox) => {
    this.setState({
      [id]: (isCheckBox ? newValue.target.checked : newValue.target.value)
    })
  }

  render() {
    const {classes} = this.props
    return (
      <div classes={classes.root}>
        <CssBaseline />
        <React.Fragment>
          <Paper className={classes.backgroundPaper}>
            <LogInCardComponent
              classes={classes}
              {...this.state}
              handleShowPassword={this.handleShowPassword.bind(this)}
              handleFieldInputChange={this.handleFieldInputChange.bind(this)}
            />
          </Paper>
        </React.Fragment>
      </div>
    )
  }
}

export default withStyles(logInStyles)(LogInContainer);
