import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './modules/event'
import placeReducer from './modules/place'
import filterReducer from './modules/filter'
import loadingReducer from './modules/loading'
import authReducer from './modules/auth'

export const store = configureStore({
  reducer: {
    event: eventReducer,
    place: placeReducer,
    filter: filterReducer,
    loading: loadingReducer,
    auth: authReducer
  },
})