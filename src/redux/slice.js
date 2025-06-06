import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "London",
}

export const cityslice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    
    setval: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setval} = cityslice.actions

export default cityslice.reducer