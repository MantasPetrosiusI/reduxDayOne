import {combineReducers, configureStore } from '@reduxjs/toolkit'
import FavouriteReducer from '../reducers/favouriteReducer'
import JobReducer from '../reducers/jobReducer'

const store = configureStore({
  reducer: combineReducers({
  favs: FavouriteReducer,
  jobs: JobReducer,
})
})


export default store
