import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers/favoriteReducer'

const store = configureStore({
  reducer: mainReducer,
})

export default store
