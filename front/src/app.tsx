import * as React from 'react'
import { Provider } from 'react-redux'

import store from './store/store'
import router from './router'

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    {router}
  </Provider>
);
