import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, ReadingPage, WritingPage, SkipPage, ListeningPage, SpeakingPage } from 'components';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route path="/reading" component={ReadingPage}/>
          <Route path="/writing" component={WritingPage}/>
          <Route path="/skip" component = {WritingPage}/>
          <Route path="/listening" component={ListeningPage}/>
          <Route path="/speaking" component={SpeakingPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;