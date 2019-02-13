/**
  This file contains all the css style constants for components used throughout
  the new RCA website

  @author: Jae Won Kwon <jaewonrt@gmail.com>
*/


export const registrationCardStyles = theme => ({
  paper: {
    backgroundcolor:"#F5F5F5",
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    }
  },
  nextButton: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit *2
  }
});
