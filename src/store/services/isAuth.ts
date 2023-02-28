import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ADMIN_DATA} from "../../types/enum";

const auth = localStorage.getItem(ADMIN_DATA.USERNAME) !== null
  ? localStorage.getItem(ADMIN_DATA.USERNAME) === ADMIN_DATA.PASSWORD
  : false

interface IInitialState {
  isAuth: boolean
}

const initialState: IInitialState = {
  isAuth: auth
}

const isAuth = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload
    }
  }
})

export const {setAuth} = isAuth.actions
export default isAuth.reducer
