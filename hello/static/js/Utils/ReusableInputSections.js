/**
  This is basic information section that is to be shared throughout the app

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 3/3/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {reusableInputSections} from '../styleConstants';
import Button from '@material-ui/core/Button';
import {BASIC_INFORMATION_SECTION,FIELD_INFORMATION_SECTION, CHURCH_INFORMATION_SECTION} from '../MyAccount/MyAccountConstants';
import Icon from '@material-ui/core/Icon';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const EditButtons = (props) => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          fullWidth
          className={props.classes.backButton}
          >
          Cancel
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          fullWidth
          className={props.classes.nextButton}
          >
          Save
          <ArrowForwardIcon />
        </Button>
      </Grid>
    </Grid>
  )
}


export const BasicInformationSection = props => {
  const isBackgroundEditDisabled = props.isEditProfileSectionDisabled[BASIC_INFORMATION_SECTION];
  const cssForBackgroundText = isBackgroundEditDisabled ?  props.classes.disabledTextField : props.classes.textField;

  return (
    <React.Fragment>
      <Grid container spacing={8}  className={props.classes.sectionTitle}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Your basic information
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            color="primary"
            onClick={() => props.handleProfileEditButton(BASIC_INFORMATION_SECTION)}
            className={props.classes.loginButton}>
              Edit
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            First name
          </Typography>
          <TextField
            disabled={isBackgroundEditDisabled}
            id={props.inputBasicInformationStateNames.firstName}
            className={cssForBackgroundText}
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.firstName}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.firstName,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Last name
          </Typography>
          <TextField
            disabled={isBackgroundEditDisabled}
            id={props.inputBasicInformationStateNames.lastName}
            className={cssForBackgroundText}
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.lastName}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.lastName,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Preferred Name/Foreign Name
          </Typography>
          <TextField
            disabled={isBackgroundEditDisabled}
            id={props.inputBasicInformationStateNames.koreanName}
            className={cssForBackgroundText}
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.koreanName}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.koreanName,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Date of Birth
          </Typography>
          <TextField
            disabled={isBackgroundEditDisabled}
            id={props.inputBasicInformationStateNames.dob}
            className={cssForBackgroundText}
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.dob}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.dob,false)}
            fullWidth
            InputLabelProps={{
              shrink: true,}}
            type="date"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Select Gender
          </Typography>
          <TextField
            disabled={isBackgroundEditDisabled}
            id={props.inputBasicInformationStateNames.selectGender}
            className={cssForBackgroundText}
            select
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.selectGender}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.selectGender,false)}
            fullWidth
          >
            <MenuItem key="male" value="male">Male</MenuItem>
            <MenuItem key="female" value="female">Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Select Language
          </Typography>
          <TextField
            disabled={isBackgroundEditDisabled}
            id={props.inputBasicInformationStateNames.selectLanguage}
            className={cssForBackgroundText}
            select
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.selectLanguage}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.selectLanguage,false)}
            fullWidth
          >
            <MenuItem key="english" value="english">English</MenuItem>
            <MenuItem key="korean" value="korean">Korean</MenuItem>
            <MenuItem key="chinese" value="chinese">Chinese</MenuItem>
          </TextField>
        </Grid>
        {!isBackgroundEditDisabled && <EditButtons {...props} />}
      </Grid>
    </React.Fragment>
  )
}


export const FieldInformationSection = props => {
  const isFieldEditDisabled = props.isEditProfileSectionDisabled[FIELD_INFORMATION_SECTION];
  const cssForFieldText = isFieldEditDisabled ?  props.classes.disabledTextField : props.classes.textField;
  return (
    <React.Fragment>
      <Grid container spacing={8}  className={props.classes.sectionTitle}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Your field information
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            color="primary"
            onClick={() => props.handleProfileEditButton(FIELD_INFORMATION_SECTION)}
            className={props.classes.loginButton}>
              Edit
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            School
          </Typography>
          <TextField
            disabled={isFieldEditDisabled}
            id={props.inputBasicInformationStateNames.schoolName}
            className={cssForFieldText}
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.schoolName}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.schoolName,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Grade
          </Typography>
          <TextField
            disabled={isFieldEditDisabled}
            id={props.inputBasicInformationStateNames.gradeLevel}
            className={cssForFieldText}
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.gradeLevel}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.gradeLevel,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Major
          </Typography>
          <TextField
            disabled={isFieldEditDisabled}
            id={props.inputBasicInformationStateNames.major}
            className={cssForFieldText}
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.major}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.major,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Select Area of Interest
          </Typography>
          <TextField
            disabled={isFieldEditDisabled}
            id={props.inputBasicInformationStateNames.selectAreaOfInterest}
            fullWidth
            select
            value={props.inputBasicInformationStates.selectAreaOfInterest}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.selectAreaOfInterest, false)}}
            className={cssForFieldText}
            margin="normal"
            variant="outlined"
            >
            <MenuItem key="accounting" value="accounting">Accounting</MenuItem>
            <MenuItem key="finance" value="finance">Finance</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Company
          </Typography>
          <TextField
            disabled={isFieldEditDisabled}
            id={props.inputBasicInformationStateNames.company}
            className={cssForFieldText}
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.company}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.company,false)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Title (Company)
          </Typography>
          <TextField
            disabled={isFieldEditDisabled}
            id={props.inputBasicInformationStateNames.title}
            className={cssForFieldText}
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.title}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.title,false)}
            fullWidth
          />
        </Grid>
        {!isFieldEditDisabled && <EditButtons {...props} />}
      </Grid>
    </React.Fragment>
  )
}


export const ChurchInformationSection = props => {
  const isChurchEditDisabled = props.isEditProfileSectionDisabled[CHURCH_INFORMATION_SECTION];
  const cssForChurchText = isChurchEditDisabled ?  props.classes.disabledTextField : props.classes.textField;
  return (
    <React.Fragment>
      <Grid container spacing={8} className={props.classes.sectionTitle}>
        <Grid item xs={12} sm={4} >
          <Typography variant="h6" gutterBottom>
            Your church information
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            color="primary"
            onClick={() => props.handleProfileEditButton(CHURCH_INFORMATION_SECTION)}
            className={props.classes.loginButton}>
              Edit
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Select Your Position In Church
          </Typography>
          <TextField
            disabled={isChurchEditDisabled}
            id={props.inputBasicInformationStateNames.selectChurchPosition}
            select
            fullWidth
            value={props.inputBasicInformationStates.selectChurchPosition}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.selectChurchPosition, false)}}
            className={cssForChurchText}
            margin="normal"
            variant="outlined"
            >
            {/* TODO: insert more menu items and refactor if neccessary */}
            <MenuItem key="remnant" value="remnant">Remnant</MenuItem>
            <MenuItem key="deacon" value="deacon">Deacon</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Select Your Training Level
          </Typography>
          <TextField
            disabled={isChurchEditDisabled}
            id={props.inputBasicInformationStateNames.selectTrainingLevel}
            fullWidth
            select
            value={props.inputBasicInformationStates.selectTrainingLevel}
            onChange={(newValue) => {props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.selectTrainingLevel, false)}}
            className={cssForChurchText}
            margin="normal"
            variant="outlined"
            >
            {/* TODO: insert more menu items and refactor if neccessary */}
            <MenuItem key="first-level-camp" value="first-level-camp">First Level Camp Training</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="subtitle1" className={props.classes.subHeading}>
            Select Your Church
          </Typography>
          <TextField
            disabled={isChurchEditDisabled}
            id={props.inputBasicInformationStateNames.selectChurchName}
            className={cssForChurchText}
            select
            margin="normal"
            variant="outlined"
            value={props.inputBasicInformationStates.selectChurchName}
            onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.selectChurchName,false)}
            fullWidth
          >
            {/* TODO: insert more church names and refactor if neccessary */}
            <MenuItem key="one-mind-church" value="one-mind-church">One Mind Church</MenuItem>
            <MenuItem key="boston-immanuel" value="boston-immanuel">Boston Immanuel</MenuItem>
            <MenuItem key="not-listed" value="not-listed">Not listed here</MenuItem>
          </TextField>
        </Grid>
        {
          (props.inputBasicInformationStates.selectChurchName === "not-listed") &&
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle1" className={props.classes.subHeading}>
              Type In Your Church Name
            </Typography>
            <TextField
              disabled={isChurchEditDisabled}
              id={props.inputBasicInformationStateNames.typeInChurchName}
              className={cssForChurchText}
              margin="normal"
              variant="outlined"
              value={props.inputBasicInformationStates.typeInChurchName}
              onChange={(newValue) => props.handleFieldInputChange(newValue,props.inputBasicInformationStateNames.typeInChurchName,false)}
              fullWidth
            />
          </Grid>
        }
        {!isChurchEditDisabled && <EditButtons {...props} />}
      </Grid>
    </React.Fragment>
  )
}
