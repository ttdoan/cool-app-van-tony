import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { SessionState, User } from './session.d'

const initialState: SessionState = {
  user: null,
}

const slice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      console.log('login action payload', action.payload)
      state.user = action.payload
    },
    logout(state) {
      state.user = null
    },
  },
})

export const { login, logout } = slice.actions

export default slice.reducer
