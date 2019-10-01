import React, { Component } from 'react';
import UserOutput  from './UserOutput/UserOutput';
import UserInput  from './UserInput/UserInput';
import ValidationComponent from './ValidationComponent/ValidationComponent';

import './App.css';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    user: {
      firstName: 'Olivia',
      lastName: 'Gosselin'
    },
    inputText: ''
  }

  nameChangeHandler = (event) => {
    this.setState({
      user: {
        firstName: event.target.value,
        lastName: this.state.user.lastName
      }
    });
  }

  inputChangeHandler = (event) => {
    this.setState({inputText: event.target.value});
  }

  deleteChar = (charIndex) => {
    const input = this.state.inputText.split('');
    input.splice(charIndex, 1);
    const updatedInput = input.join('');
    this.setState({inputText: updatedInput});
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.inputChangeHandler} value={this.state.inputText}></input>
        <p>{this.state.inputText}</p>
        <ValidationComponent inputLength={this.state.inputText.length}/>
        { 
          this.state.inputText.split('').map((char, index) => {
            return <CharComponent
            char={char}
            key={index}
            click={() => this.deleteChar(index)}/>
          })
        }
        <UserInput user={this.state.user} changed={this.nameChangeHandler}/>
        <UserOutput user={this.state.user}/>
      </div>
    );
  }
}

export default App;
