import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './navbarComponent'
import CreateAccountContainer from './CreateAccountContainer'


class App extends React.Component {
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


const element = <App name="world" />;
ReactDOM.render(
  element,
  document.getElementById('create-account')
);
