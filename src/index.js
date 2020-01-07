import ReactDOM from 'react-dom';
import React from 'react';
import RouteWrapper from './Router';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <RouteWrapper />
  </Provider>,
  document.getElementById('app')
);