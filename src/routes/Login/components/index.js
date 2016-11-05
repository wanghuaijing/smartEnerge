/**
 * Created by whj57 on 2016/10/20.
 */
import React from 'react'
import { IndexLink, Link } from 'react-router'
import LoginForm from './loginForm'
import '../assets/_base.scss'
export const Login =(props)=>{
  return(
  <div className="login">
    <div className="login-top-layer">
      <div className="login-title">
      </div>
      <div className="login-frame-wrapper">
        <div className="login-frame">
          <div className="login-frame-title">
            请登录
          </div>
          <LoginForm {...props}/>
          <label className="login-checkbox-label">记住密码</label>
          <Link to='#' activeClassName="active" className="login-link">忘记密码?</Link>
          <button className="login-btn" onClick={props.loginHandler}>{props.isLogining?'登录中':'登录'}</button>
        </div>
      </div>
    </div>
  </div>
)};
Login.propTypes = {
  loginData : React.PropTypes.object.isRequired,
  inputChange:React.PropTypes.func.isRequired,
  loginHandler:React.PropTypes.func.isRequired,
  isLogining:React.PropTypes.bool.isRequired
};
export default Login
