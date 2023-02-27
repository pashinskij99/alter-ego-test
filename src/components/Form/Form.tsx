import {Box, Button, TextField, Typography} from "@mui/material";
import {ChangeEventHandler, FormEventHandler, useReducer} from "react";
import {ADMIN_DATA} from "../../types/store.types";
import {setAuth} from "../../store/services/isAuth";
import {APP_LINKS} from "../../types/constant.types";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../store/hooks/hooks";

enum FORM_REDUCER_ACTION_TYPES {
  SET_NAME = 'SET_NAME',
  SET_PASSWORD = 'SET_PASSWORD',
  SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR',
  SET_NAME_ERROR = 'SET_NAME_ERROR',
}

interface IFormInitialState {
  name: string,
  password: string
  errorName: string
  errorPassword: string
}

interface Payload {
  type: FORM_REDUCER_ACTION_TYPES
  payload: string
}

const initialState: IFormInitialState = {
  name: '',
  password: '',
  errorName: '',
  errorPassword: '',
}

const reducer = (state: IFormInitialState, action: Payload) => {
  switch (action.type) {
    case FORM_REDUCER_ACTION_TYPES.SET_NAME:
      return {...state, name: action.payload}
      break
    case FORM_REDUCER_ACTION_TYPES.SET_PASSWORD:
      return {...state, password: action.payload}
      break
    case FORM_REDUCER_ACTION_TYPES.SET_PASSWORD_ERROR:
      return {...state, errorPassword: action.payload}
      break
    case FORM_REDUCER_ACTION_TYPES.SET_NAME_ERROR:
      return {...state, errorName: action.payload}
      break
    default:
      return state
  }
}

const inputStyle = {
  width: '100%'
}

export const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const navigate = useNavigate()
  const storeDispatch = useAppDispatch()

  const customDispatch = (type: FORM_REDUCER_ACTION_TYPES, payload: string) => dispatch({type, payload})

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (state.name === ADMIN_DATA.USERNAME && state.password === ADMIN_DATA.PASSWORD) {
      localStorage.setItem(ADMIN_DATA.USERNAME, ADMIN_DATA.PASSWORD)
      storeDispatch(setAuth(true))
      navigate(APP_LINKS.PROFILE)
      customDispatch(FORM_REDUCER_ACTION_TYPES.SET_NAME_ERROR, '')
      customDispatch(FORM_REDUCER_ACTION_TYPES.SET_PASSWORD_ERROR, '')
    } else if (state.name !== ADMIN_DATA.USERNAME && state.password === ADMIN_DATA.PASSWORD) {
      customDispatch(FORM_REDUCER_ACTION_TYPES.SET_NAME_ERROR, 'Incorrect name')
      customDispatch(FORM_REDUCER_ACTION_TYPES.SET_PASSWORD_ERROR, '')
    } else if (state.name === ADMIN_DATA.USERNAME && state.password !== ADMIN_DATA.PASSWORD) {
      customDispatch(FORM_REDUCER_ACTION_TYPES.SET_PASSWORD_ERROR, 'Incorrect password')
      customDispatch(FORM_REDUCER_ACTION_TYPES.SET_NAME_ERROR, '')
    } else {
      customDispatch(FORM_REDUCER_ACTION_TYPES.SET_PASSWORD_ERROR, 'Incorrect password')
      customDispatch(FORM_REDUCER_ACTION_TYPES.SET_NAME_ERROR, 'Incorrect name')
    }
  }


  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (event) => dispatch({
    type: FORM_REDUCER_ACTION_TYPES.SET_NAME,
    payload: event.target.value
  })
  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => dispatch({
    type: FORM_REDUCER_ACTION_TYPES.SET_PASSWORD,
    payload: event.target.value
  })
  return (
    <Box
      onSubmit={handleSubmit}
      component='form'
      sx={{'& > :not(style)': {m: 1},}}
      autoComplete="off"
    >
      <Typography id="transition-modal-title" variant="h5" component="h5">Sign in</Typography>
      <TextField
        error={state.errorName ? true : false}
        onChange={handleChangeName}
        sx={inputStyle}
        label="Username"
        variant="outlined"
        helperText={state.errorName}
      />
      <TextField
        error={state.errorPassword ? true : false}
        onChange={handleChangePassword}
        sx={inputStyle}
        label="Password"
        variant="outlined"
        helperText={state.errorPassword}
      />
      <Button type='submit' color="primary" variant='contained'>Sign in</Button>
    </Box>
  )
}
