import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import app from './reducers';
import { getAuthToken, setAuthToken } from './storage';

const persistedState = {
  auth: {
    token: getAuthToken()
  }
};

const configureStore = () => {
  const store = createStore(
    app,
    persistedState,
    applyMiddleware(thunk)
  );

  store.subscribe(() => {
    setAuthToken(store.getState().auth.token);
  });

  return store;
};

export default configureStore;
