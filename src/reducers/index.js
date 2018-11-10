import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from './app';
import quote from './quotes';

export default history => combineReducers({
  router: connectRouter(history),
  app,
  quote,
});
