'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = require('../../store/reducers');

exports.default = function (store) {
  return {
    path: 'login',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        var Login = require('./containers/LoginContainer').default;
        var reducer = require('./modules/login').loginInputReducer;
        console.log(store.asyncReducers);
        (0, _reducers.injectReducer)(store, { key: 'login', reducer: reducer });
        cb(null, Login);
      }, 'login');
    }
  };
}; /**
    * Created by whj57 on 2016/10/20.
    */

//# sourceMappingURL=index-compiled.js.map