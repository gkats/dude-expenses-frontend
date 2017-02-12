import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import app from './reducers';

const configureStore = () => (
  createStore(
    app,
    applyMiddleware(thunk)
  )
);

export default configureStore;
