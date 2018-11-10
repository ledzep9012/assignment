import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createRootReducer from './reducers';

const store = history => createStore(
  createRootReducer(history), // root reducer with router state
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      thunkMiddleware,
      createLogger(),
    ),
  ),
);

export default store;
