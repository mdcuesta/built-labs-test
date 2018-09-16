import { createStore as createReduxStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import userSagas from './sagas/users-saga';

export function createStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createReduxStore(reducers, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(userSagas);
  
  return store;
}
