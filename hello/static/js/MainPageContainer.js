/**
  This file contains the container for the main app.
  This had to be created to use jss on the main app.

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 2/21/19
*/
import React from 'react'
import ReactDOM from 'react-dom'
import {NavBar} from './navbarComponent'
import { withStyles } from '@material-ui/core/styles';
import RegistrationCardComponent from './RegistrationCardComponent'
import Paper from '@material-ui/core/Paper';
import {indexPageStyles}  from './styleConstants';
import LogInContainer from './Login/LogInContainer';
import CreateAccountContainer from './CreateAccount/CreateAccountContainer';
import LandingPageContainer from './LandingPage/LandingPageContainer';

const REGISTRATION_PAGE = "Registration";
const LOGIN_PAGE = "login";
const ABOUT_US = "aboutUs";
const LANDING_PAGE = "landingPage";
const CREATE_ACCOUNT = "createAccount";

class MainPageContainer extends React.Component {
  state = {
    currentPage: LANDING_PAGE,
  }

  handleTabChange = (event, value) => {
    let currentPage = REGISTRATION_PAGE;
    if (value === 0) {
      currentPage = LANDING_PAGE;
    } else if (value === 1) {
      currentPage = ABOUT_US;
    } else if (value === 2) {
      currentPage = REGISTRATION_PAGE;
    } else {
      currentPage = LANDING_PAGE;
    }
    this.setState({currentPage: currentPage});
  }

  handleLoginSignUpButtons = (isLoginPage) => {
    const pageDirected = isLoginPage ? CREATE_ACCOUNT : LOGIN_PAGE
    this.setState({currentPage: pageDirected});
  }

  handleLandingPageSignUpButton = () => {
    this.setState({currentPage: REGISTRATION_PAGE})
  }

  render () {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper>
          <NavBar
            classes={classes}
            handleTabChange={this.handleTabChange.bind(this)}
            handleLoginSignUpButtons={this.handleLoginSignUpButtons.bind(this)}
            isLoginPage={this.state.currentPage === LOGIN_PAGE}
          />
          {(this.state.currentPage === REGISTRATION_PAGE) && <RegistrationCardComponent />}
          {(this.state.currentPage === LOGIN_PAGE) && <LogInContainer />}
          {(this.state.currentPage === CREATE_ACCOUNT) && <CreateAccountContainer />}
          {(this.state.currentPage === LANDING_PAGE) && <LandingPageContainer
            handleLandingPageSignUpButton={this.handleLandingPageSignUpButton.bind(this)} />}
        </Paper>
      </React.Fragment>
    )
  }
}

export default withStyles(indexPageStyles)(MainPageContainer);
