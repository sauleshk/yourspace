import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  amount: [],
  totalAmount: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.user
      },

  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer