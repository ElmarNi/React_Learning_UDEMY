import React, { Component } from 'react';
import User from './components/User';
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Form</h1>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
      </div>
    )
  }
}
