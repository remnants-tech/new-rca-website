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
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

const SignUpButton = (props) => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={11}>
        <Button
          variant="contained"
          fullWidth
          className={props.classes.signUpButton}
          classes={{label:props.classes.signUpButtonLabel}}
          onClick={props.handleLandingPageSignUpButton}
          >
          Sign up here
          <ArrowForwardIcon />
        </Button>
      </Grid>
    </Grid>
  )
}


class LandingPageContainer extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Paper className={classes.backgroundPaper}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={3}/>
            <Grid item xs={12} sm={4}>
              <Typography variant="h2" className={classes.underline} gutterBottom>_</Typography>
              <Typography variant="h2" className={classes.mainText}  style={{marginRight: 30}} inline gutterBottom>2019</Typography>
              <Typography variant="h6" className={classes.mainText} inline gutterBottom>May 23-25 • New Jersey</Typography>
              <Typography variant="h2" className={classes.mainText} style={{fontWeight:"bold"}} gutterBottom>North America</Typography>
              <Typography variant="h2" className={classes.mainText} style={{fontWeight:"bold"}} gutterBottom>College Retreat</Typography>
              <SignUpButton classes={classes} handleLandingPageSignUpButton={this.props.handleLandingPageSignUpButton}/>
            </Grid>
            <Grid item xs={12} sm={5}></Grid>
          </Grid>
        </Paper>
        <Paper className={classes.footer}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={3}/>
            <Grid item xs={12} sm={2}>
              <Avatar className={classes.avatar}>RM</Avatar>
                <Typography className={classes.rmText}>Remnant Ministry</Typography>
            </Grid>
            <Grid item xs={12} sm={1}>
              <Link
                component="button"
                variant="body2"
                underline="none"
                className={classes.menuText}
              >
              About us
              </Link>
              <Link
                component="button"
                variant="body2"
                underline="none"
                className={classes.menuSubText}
              >
              Message
              </Link>
            </Grid>
            <Grid item xs={12} sm={1}>
              <Link
                component="button"
                variant="body2"
                underline="none"
                className={classes.menuText}
              >
              Contact us
              </Link>
              <Link
                component="button"
                variant="body2"
                underline="none"
                className={classes.menuSubText}
              >
              Training
              </Link>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.copyrightSection}>
          <Grid container >
            <Grid item xs={12} sm={3}/>
            <Grid item xs={12} sm={6}>
                <Typography className={classes.copyrightText}>
                  ©2019 Remnant Ministry. All rights reserved. Privacy Policy and Terms of Use
                </Typography>
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    )
  }
}

export default withStyles(landingPageStyles)(LandingPageContainer);
