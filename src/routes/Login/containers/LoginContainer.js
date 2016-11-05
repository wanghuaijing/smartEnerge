/**
 * Created by whj57 on 2016/10/31.
 */
import {connect} from 'react-redux'
import {inputChange,isLoginHandler,loginHandler} from '../modules/login'

import Login from '../components'

const mapDispatchToProps = {
  inputChange,
  isLoginHandler,
  loginHandler
};

const mapStateToProps =(state)=> ({
  loginData:state.login.loginData,
  isLogining:state.login.isLogining
});

export default connect(mapStateToProps,mapDispatchToProps)(Login)
