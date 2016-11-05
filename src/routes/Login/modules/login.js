/**
 * Created by whj57 on 2016/10/30.
 */
import auth from 'auth'
import store from 'store'
export const LOGIN_INPUT_CHANGE = "LOGIN_INPUT_CHANGE";
export const AJAX_STATE = "AJAX_STATE";
import {combineReducers} from 'redux'
export function isLoginHandler(value){
  return{
    type:AJAX_STATE,
    payload:value
  }
}

export function inputChange (value){
  return{
    type:LOGIN_INPUT_CHANGE,
    payload:value
  }
}

export const loginHandler=()=>{
  return(dispatch,getState)=>{
    dispatch(isLoginHandler(true));
    let login = getState().login;
    auth.authorize(login.loginData.username, login.loginData.password,
      (error, data)=>{
        dispatch(isLoginHandler(false));
        if(error&&error.code<0){
          alert('登录失败')
        }else {
          alert('登录成功')
        }
      });
  }
};

export const actions = {
  isLoginHandler,
  inputChange,
  loginHandler
};

const ACTION_HANDLERS = {
  [LOGIN_INPUT_CHANGE]:(state,action)=>{
    state.loginData = {...state.loginData , ...action.payload};
    return {...state}
  },
  [AJAX_STATE]:(state,action)=>{
    state.isLogining = action.payload
    return{...state}}
};

const initialState = {
  loginData:{
    username:'',
    password:'',
  },
  isLogining:false
};

export  function loginInputReducer(state=initialState,action){
  const handler = ACTION_HANDLERS[action.type];
  return handler?handler(state,action):state
}

export default loginInputReducer
