import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface ExerciseState {
    value: number
}

const initialState: ExerciseState = {
    value: 0,
}

export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },

    }
})

export const { increment, decrement, incrementByAmount } = exerciseSlice.actions

export const selectExercise = (state: RootState) => state.exercise.value

export default exerciseSlice.reducer

