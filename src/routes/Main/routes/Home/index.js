/**
 * Created by whj57 on 2016/10/21.
 */

export default (store) => ({
  path : 'home',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Home = require('./components/HomeView').default

      /*  Add the reducer to the store on key 'counter'  */

      /*  Return getComponent   */
      cb(null, Home)

      /* Webpack named bundle   */
    }, 'home')
  }
})
