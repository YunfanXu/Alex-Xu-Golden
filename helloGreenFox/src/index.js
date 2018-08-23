import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import App from './App';
import store from './store';
import nav from './components/nav';
import AppState from '../simple/states/AppState';
import AppRedux from '../simple/redux/AppRedux';

ReactDOM.render(
  <div>
    <Router history={browserHistory}>
      <Provider store={store}>
        <App>
          <Route path="/" component={nav} />
          <Route exact path="/simple/states" component={AppState} />
          <Route exact path="/simple/redux" component={AppRedux} />
        </App>
      </Provider>
    </Router>
  </div>, document.getElementById('root'),
);
