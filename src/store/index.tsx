import {configureStore} from '@reduxjs/toolkit';
import createRootReducer from "./reducers";
import logger from 'redux-logger'

export default function configureAppStore(
  preloadedState: any,
) {
  const rootReducer = createRootReducer()

  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      const defaultMiddleware = getDefaultMiddleware();

      if(process.env.NODE_ENV !== 'production') {
        defaultMiddleware.concat(logger)
      }

      return defaultMiddleware
    },
    preloadedState
  })

  return {
    store,
    rootReducer
  }
}
