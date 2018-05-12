import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, ReadingPage, WritingPage, SkipPage, ListeningPage, SpeakingPage, FinishPage } from 'components';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route path="/reading" component={ReadingPage}/>
          <Route path="/writing" component={WritingPage}/>
          <Route path="/skip" component = {SkipPage}/>
          <Route path="/listening" component={ListeningPage}/>
          <Route path="/speaking" component={SpeakingPage}/>
          <Route path="/finish" component={FinishPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;