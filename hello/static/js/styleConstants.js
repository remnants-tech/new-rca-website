/**
  This file contains all the css style constants for components used throughout
  the new RCA website

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 2/16/19
*/

import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import landingPageBackgroundImage from './bg-sm.jpg';

const drawerWidth = 300;

export const registrationCardStyles = theme => ({
  paper: {
    backgroundColor:"#e0e0e0",
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    flexGrow: 1,
    minHeight: "100vh"
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
  },
  subHeading: {
    marginBottom: 0,
    paddingBottom: 0
  },
  textField: {
    backgroundColor:"#ffffff",
    marginTop: 0
  },
  createAccountHeading: {
    marginBottom: theme.spacing.unit * 4
  }
});

export const indexPageStyles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    color: "black",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#ffffff",
    color: "black",
    display: "flex"
  },
  label: {
    color: "black",
    fontWeight: "bold",
    fontSize:14
  },
  tab: {
  },
  loginButton: {
    fontsize: 14,
    fontWeight: "bold",
    padding: theme.spacing.unit * 1.5
  },
  navBarSignupMsg: {
    width:150,
    padding: theme.spacing.unit * 1.5,
    fontsize: 14
  }
});

export const textFieldStyles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
})

export const logInStyles = theme => ({
  root: {
    display: 'flex',
  },
  card: {
    maxWidth: 600,
    padding: theme.spacing.unit * 3,
    backgroundColor:"#F3F3F3",
    marginBottom: theme.spacing.unit * 20
  },
  title: {
    marginBottom: theme.spacing.unit * 2
  },
  subHeading: {
    marginBottom: 0,
    paddingBottom: 0
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    backgroundColor:"#ffffff",
    marginTop: 0
  },
  backgroundPaper: {
    backgroundColor:"#D8D8D8",
    padding: theme.spacing.unit * 10,
    flexGrow: 1,
  },
  checkbox: {
    marginLeft: 0
  },
  nextButton: {
    backgroundColor:"#054ada",
    color:"white",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

export const createAccountFirstStepStyles = theme => ({
  subHeading: {
    marginBottom: 0,
    paddingBottom: 0
  },
  textField: {
    backgroundColor:"#ffffff",
    marginTop: 0
  },
})

export const landingPageStyles = theme => ({
  backgroundPaper: {
    backgroundImage: "url(static/" + landingPageBackgroundImage +")",
    minHeight: "90vh"
  }
})
