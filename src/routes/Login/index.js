/**
 * Created by whj57 on 2016/10/20.
 */
import { injectReducer } from '../../store/reducers'

export default(store)=>({
  path:'login',
  getComponent(nextState,cb){
    require.ensure([],(require)=>{
      const Login = require('./containers/LoginContainer').default;
      const reducer = require('./modules/login').loginInputReducer;
      injectReducer(store,{key:'login',reducer})
      cb(null,Login)
    },'login')
  }
})
