import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, ReadingPage } from 'components';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route path="/reading" component={ReadingPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;