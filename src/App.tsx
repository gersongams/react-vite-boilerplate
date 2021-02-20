import React from 'react'
import AppRouter from './router';
import {Provider} from "react-redux";
import configureAppStore from "./store";
import GlobalStyle from "./styles/globalStyle";

const initialState = {};
const {store, rootReducer} = configureAppStore(initialState);

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
      <GlobalStyle />
    </Provider>
  )
};

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export default App
