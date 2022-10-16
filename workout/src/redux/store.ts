import { configureStore, applyMiddleware, ThunkMiddleware } from '@reduxjs/toolkit';
import exerciseReducer from './features/exerciseSlice';
import userReducer from './features/userSlice';
import axios from 'axios';

export const store = configureStore({
    reducer: {
        user: userReducer,
        exercise: exerciseReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

