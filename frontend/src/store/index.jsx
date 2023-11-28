import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './modules/event'
import placeReducer from './modules/place'
import filterReducer from './modules/filter'

export const store = configureStore({
  reducer: {
    event: eventReducer,
    place: placeReducer,
    filter: filterReducer
  },
})