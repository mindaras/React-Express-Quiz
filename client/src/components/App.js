import React, { Component } from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Intro from './Intro';
import Quiz from './Quiz';
import Finish from './Finish';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/finish" component={Finish} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/" component={Intro} />
        </Switch>
      </div>
    );
  }
}

export default App;
