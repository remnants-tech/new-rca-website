import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './navbarComponent'
import RegistrationCardComponent from './RegistrationCardComponent'
import Paper from '@material-ui/core/Paper';


class App extends React.Component {
  render () {
    return (
      <div>
        <React.Fragment>
          <Paper>
            <NavBar />
            <RegistrationCardComponent />
          </Paper>
        </React.Fragment>
      </div>
    )
  }
}


const element = <App name="world" />;
ReactDOM.render(
  element,
  document.getElementById('react')
);
