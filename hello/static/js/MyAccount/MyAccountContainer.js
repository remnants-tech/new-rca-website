/**
  This is the container for my account page

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 3/1/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {myAccountContainerStyles} from '../styleConstants';
import Button from '@material-ui/core/Button';
import {REGISTRATION_PAGE, LOGIN_PAGE, ABOUT_US, LANDING_PAGE, CREATE_ACCOUNT, MY_ACCOUNT} from '../MainPageConstants';
import {MyProfileTabContent} from './MyProfileComponent';
import {accountProfileStates, accountProfileStateNames} from './MyAccountConstants';
import {EditMyProfileTabContent} from './EditMyProfileComponent';
import {BASIC_INFORMATION_SECTION,FIELD_INFORMATION_SECTION, CHURCH_INFORMATION_SECTION} from './MyAccountConstants';

const MY_PROFILE = 0;
const EDIT_PROFILE = 1;
const ACCOUNT_SETTING = 2;

class MyAccountContainer extends React.Component {
  state = {
    userName: "Sample User 123",
    currentTab: MY_PROFILE,
    resteredEventInformation: {
      registeredEventName: "College & Young Adult Retreat",
      registeredEventDate: "05/05/2019 - 05/06/2019",
      registeredEventLocation: "Seattle, WA"
    },
    isViewDetailModalOpen: false,
    accountProfileStates,
    isEditProfileSectionDisabled: {
      [BASIC_INFORMATION_SECTION]: true,
       [FIELD_INFORMATION_SECTION]: true,
       [CHURCH_INFORMATION_SECTION]: true
    }
  }

  handleTabChange = (event, value) => {
    this.setState({currentTab: value});
  }

  handleEventButton = (isViewDetail) => {
    if (isViewDetail) {
      this.setState(
        (prevState) => {
          return {isViewDetailModalOpen: !prevState.isViewDetailModalOpen}
        }
      )
    } else {
      this.props.handlePageNavigation(REGISTRATION_PAGE)
    }
  }

  handleFieldInputChange = (newValue, id, isCheckBox) => {
    this.setState({
      accountProfileStates: {
        ...this.state.accountProfileStates,
        [id]: (isCheckBox ? newValue.target.checked : newValue.target.value)
      }
    })
  }

  handleProfileEditButton = (section) => {
    this.setState(
      (prevState) => {
        let {isEditProfileSectionDisabled} = prevState;
        return {isEditProfileSectionDisabled: {
          ...prevState.isEditProfileSectionDisabled,
          [section]: !isEditProfileSectionDisabled[section]
        }}
      }
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.upperSidePaper}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={3}/>
            <Grid item xs={12} sm={9}>
              <Typography variant="h4" gutterBottom className={classes.mainText}>Hey {this.state.userName},</Typography>
          </Grid>
        </Grid>
        <Tabs
          value={this.state.currentTab}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="My Profile" />
          <Tab label="Edit Profile" />
          <Tab label="Account Setting" />
        </Tabs>
        <Paper className={classes.bottomHalfPaper}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={3}/>
            <Grid item xs={12} sm={7}>
              <div>
                {this.state.currentTab === MY_PROFILE &&
                  <MyProfileTabContent
                    {...this.state.resteredEventInformation}
                    {...this.props}
                    handleEventButton={this.handleEventButton.bind(this)}
                  />
                }
                {this.state.currentTab === EDIT_PROFILE &&
                  <EditMyProfileTabContent
                    inputBasicInformationStateNames = {accountProfileStateNames}
                    inputBasicInformationStates = {this.state.accountProfileStates}
                    handleFieldInputChange = {this.handleFieldInputChange.bind(this)}
                    handleProfileEditButton = {this.handleProfileEditButton.bind(this)}
                    isEditProfileSectionDisabled = {this.state.isEditProfileSectionDisabled}
                    classes = {classes}
                  />
                }
              </div>
            </Grid>
            <Grid item xs={12} sm={2}/>
          </Grid>
        </Paper>
      </Paper>
    )
  }
}

export default withStyles(myAccountContainerStyles)(MyAccountContainer);
