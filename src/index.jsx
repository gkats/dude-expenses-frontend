import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './components/Root';

injectTapEventPlugin();

const store = configureStore();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

render(
  <Root store={store} />,
  document.getElementById('app')
);