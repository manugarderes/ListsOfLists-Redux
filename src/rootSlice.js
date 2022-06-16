import { createSlice } from '@reduxjs/toolkit'

export const rootSlice = createSlice({
  name: 'root',
  initialState: [],
  reducers: {
    CREATE_LIST: (state, action) => {
      state.push({ title: action.payload, list: [] })
    },
    DELETE_LIST: (state, action) => {
      return state.filter((item) => item.title !== action.payload)
    },
  },
})

export const { CREATE_LIST, DELETE_LIST } = rootSlice.actions

export default rootSlice.reducer