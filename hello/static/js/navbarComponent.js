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
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

export const NavBar = (props) => {
  return (
    <React.Fragment>
      <AppBar position="sticky" className={props.classes.appBar}>
        <Grid
          justify="space-between"
          container
          spacing={24}
        >
          <Grid item>
            <Avatar className={props.classes.avatar}>RM</Avatar>
            <Tabs value={0} onChange={props.handleTabChange} className={props.classes.tab}>
              <Tab label="Home" classes={{label: props.classes.label}} />
              <Tab label="About us" classes={{label: props.classes.label}} />
              <Tab label="Registration" classes={{label: props.classes.label}}/>
            </Tabs>
          </Grid>
            {
              props.isLoginPage ?
              <React.Fragment>
                <Grid item>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={7}>
                        <Typography variant="body1" className={props.classes.navBarSignupMsg}>Are you new here?</Typography>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <Button
                        color="primary"
                        onClick={() => props.handleLoginSignUpButtons(props.isLoginPage)}
                        className={props.classes.loginButton}>
                          Sign up
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </React.Fragment>
               :
             <React.Fragment>
               <Grid item>
                 <Button
                   color="inherit"
                   onClick={() => props.handleLoginSignUpButtons(props.isLoginPage)}
                   className={props.classes.loginButton}>
                     Log in
                 </Button>
                 <Typography></Typography>
               </Grid>
             </React.Fragment>

            }
      </Grid>
      </AppBar>
    </React.Fragment>
  )
}
