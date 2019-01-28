import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './src/screens';

import configureStore from './src/redux/configureStore';

const store = configureStore();

export default class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
