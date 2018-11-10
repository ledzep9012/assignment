import React from 'react';
import { Provider } from 'react-redux';
// Routing Dependencies
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import store from './configureStore';

// Debug Only
import Routes from './routes';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store(history)}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default App;
