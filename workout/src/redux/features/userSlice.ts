import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface UserState {
    email:string,
    age: number
}

const initialState: UserState|null = null

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state = action.payload
        },
        logout: (state) => {
            state = null
        },
      
    }
})

export const { login, logout} = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer

