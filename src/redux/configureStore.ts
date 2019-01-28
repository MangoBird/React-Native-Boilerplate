import { Store } from 'redux';

import devConfig from './configureStore.dev';
import prodConfig from './configureStore.prod';

let configureStore: () => Store;

if (process.env.NODE_ENV === 'production') {
  // configureStore = require('./configureStore.prod');
  configureStore = prodConfig;
} else {
  // configureStore = require('./configureStore.dev');
  configureStore = devConfig;
}

export default devConfig;
