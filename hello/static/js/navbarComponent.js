/**
  Navigation bar component of the Website

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date:2/16/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {navBarStyles} from './styleConstants';


class NavBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <React.Fragment>
        <AppBar position="sticky" className={classes.appBar}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="About us" classes={{label: classes.label}}/>
            <Tab label="Registration" classes={{label: classes.label}}/>
            <Tab label="Account" classes={{label: classes.label}}/>
          </Tabs>
        </AppBar>
      </React.Fragment>
    );
  }
}


export default withStyles(navBarStyles)(NavBar);
