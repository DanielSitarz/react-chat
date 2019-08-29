import React from 'react';
import { Router, Route } from 'react-router';

import ChatContainer from './containers/ChatContainer';
import history from './history';

let baseURL = '/chat/'

export default (
  <Router history={history}>
    <Route path={baseURL} component={ChatContainer} />
    <Route path={baseURL + 'room'} component={ChatContainer} />
    <Route path={baseURL + 'room/:roomName'} component={ChatContainer} />
  </Router>
)
