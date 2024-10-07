import { configureStore } from '@reduxjs/toolkit'
// Здесь импортируйте ваши редьюсеры
// import exampleReducer from './exampleSlice'

export const store = configureStore({
  reducer: {
    // Добавьте ваши редьюсеры здесь
    // example: exampleReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch