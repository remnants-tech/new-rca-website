import React from 'react'
import ReactDOM from 'react-dom'
import MainPageContainer from './MainPageContainer';

const REGISTRATION_PAGE = "Registration";
const LOGIN_PAGE = "login";

class App extends React.Component {
  render () {
    const { classes } = this.props;
    return (
      <div>
        <MainPageContainer />
      </div>
    )
  }
}


const element = <App name="world" />;
ReactDOM.render(
  element,
  document.getElementById('react')
);
