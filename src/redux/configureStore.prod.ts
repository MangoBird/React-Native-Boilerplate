import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga as any);
  return store;
}
