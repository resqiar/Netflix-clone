import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user : null,
    play : null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
    play: (state, action) => {
      state.play = action.payload
    },
    unplay: (state) => {
      state.play = null
    },
  },
});

export const { login, logout, play, unplay } = userSlice.actions

export const selectUser = state => state.user.user
export const selectPlayState = state => state.user.play

export default userSlice.reducer;
