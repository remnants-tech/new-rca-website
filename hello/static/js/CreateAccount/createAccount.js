import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../navbarComponent'
import CreateAccountContainer from './CreateAccountContainer'


class CreateAccountPage extends React.Component {
  render () {
    return (
      <div>
        <React.Fragment>
          <NavBar />
        </React.Fragment>
        <React.Fragment>
          <CreateAccountContainer />
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
