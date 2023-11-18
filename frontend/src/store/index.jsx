import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './modules/event'
import placeReducer from './modules/place'

export const store = configureStore({
  reducer: {
    event: eventReducer,
    place: placeReducer
  },
})