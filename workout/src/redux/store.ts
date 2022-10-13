import { configureStore } from '@reduxjs/toolkit';
import exerciseReducer from './features/exercise/exerciseSlice';

export const store = configureStore({
    reducer: {
        exercise: exerciseReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

