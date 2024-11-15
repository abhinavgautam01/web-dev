import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/countrSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
      },
})