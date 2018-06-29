import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import Form from './components/Form';
import Results from './components/Results';
import Saved from './components/Saved';
import './App.css';


class App extends Component {
  render() {
    return (
      <Wrapper>
      <Jumbotron />
      <Results />
      <Saved />
      </Wrapper>
    );
  }
}

export default App;
