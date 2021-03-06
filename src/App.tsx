import * as React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './router';
import './App.css';

/**
 * The root component
 */
const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
