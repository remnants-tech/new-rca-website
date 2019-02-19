import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../navbarComponent'
import CreateAccountContainer from './CreateAccountContainer'
import Paper from '@material-ui/core/Paper';


class CreateAccountPage extends React.Component {
  render () {
    const { classes } = this.props;
    return (
      <div>
        <React.Fragment>
        <Paper>
          <NavBar />
          <CreateAccountContainer />
        </Paper>
        </React.Fragment>
      </div>
    )
  }
}


const element = <CreateAccountPage name="createAccountPage" />;
ReactDOM.render(
  element,
  document.getElementById('create-account')
);
