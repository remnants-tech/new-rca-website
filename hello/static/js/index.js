import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './navbarComponent'
import RegistrationCardComponent from './RegistrationCardComponent'


class App extends React.Component {
  render () {
    return (
      <div>
        <React.Fragment>
          <NavBar />
        </React.Fragment>
        <React.Fragment>
          <RegistrationCardComponent />
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
