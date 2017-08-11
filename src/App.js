import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <div className={classes['App-header']}>
          <img src={logo} className={classes['App-logo']} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={classes['App-intro']}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
