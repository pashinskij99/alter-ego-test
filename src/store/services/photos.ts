import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {IPhoto} from '../../types/photo.types'
import {ILimit, Status} from "../../types/store.types";

interface IInitialState {
  photos: IPhoto[]
  status: Status
  error: string
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

export const deletePhoto = createAsyncThunk(
  'photos/removePhoto',
  async (id: number, {rejectWithValue, dispatch}) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
        method: 'DELETE'
      })
      console.log(response)
      if(!response.ok) throw new Error('Can\'t delete photo. Server error!')

      dispatch(removePhoto(id))

    } catch (e: any) {
      return rejectWithValue(e.message)
    }
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
  reducers: {
    removePhoto(state, action){
      state.photos = state.photos.filter(photo => photo.id !== action.payload)
    }
  },
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

export const {removePhoto} = photoSlice.actions
export default photoSlice.reducer

