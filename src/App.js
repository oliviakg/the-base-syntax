import React, { Component } from 'react';
import UserOutput  from './UserOutput/UserOutput';
import UserInput  from './UserInput/UserInput';

import './App.css';

class App extends Component {
  state = {
    user: {
      firstName: 'Olivia',
      lastName: 'Gosselin'
    }
  }

  nameChangeHandler = (event) => {
    this.setState({
      user: {
        firstName: event.target.value,
        lastName: this.state.user.lastName
      }
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput user={this.state.user} changed={this.nameChangeHandler}></UserInput>
        <UserOutput user={this.state.user}></UserOutput>
      </div>
    );
  }
}

export default App;
