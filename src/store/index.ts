import {
  AnyAction,
  configureStore,
  Dispatch,
  EnhancedStore,
  getDefaultMiddleware,
  Middleware
} from '@reduxjs/toolkit'
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import createReducer, { RootState } from './rootReducer'
import { rootSaga } from './rootSaga'

export const initializeStore = (
  preloadedState?: RootState
): EnhancedStore<
  any,
  AnyAction,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Middleware<{}, any, Dispatch<AnyAction>>[]
> => {
  const isDevelopmentEnv: boolean = process.env.NODE_ENV === 'development'

  const reduxSagaMonitorOptions = {}
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
  const { run: runSaga } = sagaMiddleware

  const middlewares = isDevelopmentEnv
    ? [sagaMiddleware, createLogger()]
    : [sagaMiddleware]

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga
    })
  ]

  const store = configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware(), ...middlewares],
    preloadedState: preloadedState,
    devTools: isDevelopmentEnv,
    enhancers
  })

  sagaMiddleware.run(rootSaga)

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (isDevelopmentEnv && module.hot) {
    module.hot.accept('./rootReducer', () => {
      // const newRootReducer = require('./rootReducer').default
      // store.replaceReducer(newRootReducer)
      forceReducerReload(store)
    })
  }

  return store
}
