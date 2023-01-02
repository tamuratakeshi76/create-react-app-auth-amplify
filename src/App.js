import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import React, { Component } from 'react';
import './App.css';
import aws_exports from './aws-exports';
import logo from './logo.svg';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Sample App</h1>
        <p>これは、Web版VSCodeで修正したアプリです。</p>
      </div>
    );
  }
}

export default withAuthenticator(App);
