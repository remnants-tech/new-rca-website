/**
  This contains my profile component of my account formContainer

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 3/2/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DoneIcon from '@material-ui/icons/Done';
import Divider from '@material-ui/core/Divider';

const EventCard = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>Upcoming events</Typography>
      <Paper className={props.classes.eventCard}>
        <div className={props.classes.eventTitle}>
          <Typography variant="body2" className={props.classes.eventGeneralText}>{props.registeredEventName}</Typography>
        </div>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={1} />
          <Grid item xs={12} sm={3}>
            <div className={props.classes.eventLocation}>
              <Typography variant="body2" className={props.classes.eventGeneralText}>Location</Typography>
              <Typography variant="body2" className={props.classes.eventGeneralText} >{props.registeredEventLocation}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={5}>
            <div className={props.classes.eventDate}>
              <Typography variant="body2" className={props.classes.eventGeneralText} >Date</Typography>
              <Typography variant="body2" className={props.classes.eventGeneralText} >{props.registeredEventDate}</Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  )
}

const EventButtons = (props) => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          onClick={() => props.handleEventButton(true)}
          fullWidth
          className={props.classes.backButton}
          >
          View detail
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          onClick={() => props.handleEventButton(false)}
          fullWidth
          className={props.classes.nextButton}
          >
          Register
          <ArrowForwardIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

const RegisteredEventCard = (props) => {
  return (
    <Paper className={props.classes.eventCard}>
      <div className={props.classes.eventTitle}>
        <Typography variant="body2" className={props.classes.eventGeneralText}>{props.registeredEventName}</Typography>
      </div>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={3}>
          <div className={props.classes.eventLocation}>
            <Typography variant="body2" className={props.classes.eventGeneralText}>Location</Typography>
            <Typography variant="body2" className={props.classes.eventGeneralText} >{props.registeredEventLocation}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <div className={props.classes.eventDate}>
            <Typography variant="body2" className={props.classes.eventGeneralText} >Date</Typography>
            <Typography variant="body2" className={props.classes.eventGeneralText} >{props.registeredEventDate}</Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

const RegisteredEventButtons = (props) => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          onClick={() => props.handleEventButton(true)}
          fullWidth
          className={props.classes.backButton}
          >
          View detail
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          fullWidth
          className={props.classes.nextButton}
          classes= {{
            label:props.classes.buttonLabel
          }}
          disabled
          >
          Registered
          <DoneIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

export const MyProfileTabContent = (props) => {
  return (
    <React.Fragment>
      <EventCard
        {...props}
      />
      <EventButtons {...props} />
      <Divider />
      <Typography variant="h6" gutterBottom>Registered events</Typography>
      <RegisteredEventCard
        {...props}
      />
      <RegisteredEventButtons
        {...props}
      />
    </React.Fragment>
  )
}
