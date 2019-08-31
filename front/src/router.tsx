import * as React from 'react';
import { BrowserHistory as Router, Route } from 'react-router-dom';

import ChatContainer from './containers/ChatContainer';
import history from './history';

let baseURL = '/chat/'

export default (
  <Router history={history}>
    <div>
      <Route path={baseURL} component={ChatContainer} />
      <Route path={baseURL + 'room'} component={ChatContainer} />
      <Route path={baseURL + 'room/:roomName'} component={ChatContainer} />
    </div>
  </Router>
)
