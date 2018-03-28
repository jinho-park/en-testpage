import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from 'components';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;