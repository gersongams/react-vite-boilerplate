import { combineReducers } from '@reduxjs/toolkit'
import appReducer from "./appReducer";

const createRootReducer = () => combineReducers({
  app: appReducer,
})

export default createRootReducer

