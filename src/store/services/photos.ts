import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {IPhoto} from '../../types/photo.types'

interface IInitialState {
  photos: IPhoto[]
  status: 'pending' | 'fulfilled' | 'rejected' | ''
  error: string
}

interface ILimit {
  start: number
  limit: number
}

const getLimitPhotos = (start: number, limit: number) =>
  `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async (limit: ILimit) => {
    const response = await fetch(getLimitPhotos(limit.start, limit.limit))

    const data = await response.json()

    return data
  }
)

const initialState: IInitialState = {
  photos: [],
  status: '',
  error: ''
}

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state, action) => {
      state.status = 'pending'
      state.error = ''
    })
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.photos.push(...action.payload)
      state.error = ''
    })
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.status = 'rejected'
      state.error = action.payload as string
    })
  }
})

export default photoSlice.reducer

