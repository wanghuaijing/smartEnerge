/**
 * Created by whj57 on 2016/10/20.
 */
import React from 'react'
export const LoginForm = (props)=>{
  const inputChange = function(e){
    let obj = {};
    obj[e.target.name] = e.target.value;
    props.inputChange(obj);
  };
  return(
  <form className="login-form">
    <div className="username input-frame focus">
      <span className="username-img"></span>
      <label>用户名</label>
      <input name="username" value={props.loginData.username}
             onChange={inputChange}/>
    </div>
    <div className="password input-frame focus">
      <span className="password-img"></span>
      <label>登录密码</label>
      <input  name="password" type='password' value={props.loginData.password}
              onChange={inputChange}/>
    </div>
  </form>
)}
LoginForm.propTypes = {
  loginData : React.PropTypes.object.isRequired,
  inputChange:React.PropTypes.func.isRequired,
};
export default LoginForm
