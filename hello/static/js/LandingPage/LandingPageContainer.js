/**
  This is the container for the landing page

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 2/25/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {landingPageStyles} from '../styleConstants';
import Button from '@material-ui/core/Button';


class LandingPageContainer extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.backgroundPaper}>
        </Paper>
      </React.Fragment>
    )
  }
}

export default withStyles(landingPageStyles)(LandingPageContainer);
