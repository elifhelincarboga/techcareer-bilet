import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: {}
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, response) => {
      const [model, data] = response.payload
      state.filters[model] = data
    }
  },
})

export const { setFilter  } = filterSlice.actions
export default filterSlice.reducer