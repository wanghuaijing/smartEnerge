/**
 * Created by whj57 on 2016/10/21.
 */
import HomeLayout from '../../layouts/HomeCore/home'
// Sync route definition
export default (store)=>({
  path:'main',
  component:  HomeLayout,
  indexRoute: {onEnter:(nextState,replace)=>replace('/main/home')},
  getChildRoutes(location, callback) {
    const Counter = require('./routes/Counter').default;
    const Home = require('./routes/Home').default;
    callback(null, [
      Counter(store),
      Home(store)
    ]);
  },
})
