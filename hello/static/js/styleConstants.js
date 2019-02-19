/**
  This file contains all the css style constants for components used throughout
  the new RCA website

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 2/16/19
*/

import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';

const drawerWidth = 300;

export const registrationCardStyles = theme => ({
  paper: {
    backgroundColor:"#e0e0e0",
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
  },
  formContainer: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  nextButton: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit *2,
    padding: theme.spacing.unit *2,
    backgroundColor:"#054ada",
    color:"white"
  },
  backButton: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit *2,
    padding: theme.spacing.unit *2,
    backgroundColor:"#373D42",
    color:"white"
  },
  background: {
    backgroundcolor:"#e0e0e0"
  },
  textField: {
    backgroundColor:"#ffffff"
  },
  input: {
        color: 'white'
  },
  sectionHeading: {
    marginTop: theme.spacing.unit * 3
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    color:"#FFFFFF",
    fontSize: 24,
  },
  drawerPaper: {
    backgroundColor: "#282828",
    width: drawerWidth,
  },
  drawerText: {
    color:"#FFFFFF",
    fontSize: 16
  },
  drawerTextHeading: {
    color:"#FFFFFF",
    fontSize: 22
  },
  toolbar: {
    ...theme.mixins.toolbar
  },
  root: {
    display: 'flex',
  },
  divider: {
    backgroundColor: "#565656"
  }
});

export const navBarStyles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    color: "black",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    flexGrow: 1,
    backgroundColor: "#ffffff",
    color: "black",
  },
  label: {
    color: "black",
    fontWeight: "bold",
    fontSize:14
  }
});

export const textFieldStyles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
})
