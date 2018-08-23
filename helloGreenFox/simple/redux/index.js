import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRedux from './AppRedux';
import store from '../../src/store';

render(
  <Provider store={store}>
    <AppRedux />
  </Provider>,
  document.getElementById('root'),
);
