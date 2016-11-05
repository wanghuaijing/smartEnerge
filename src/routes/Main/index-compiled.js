'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = require('../../layouts/HomeCore/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Sync route definition
exports.default = function (store) {
  return {
    path: 'main',
    component: _home2.default,
    indexRoute: { onEnter: function onEnter(nextState, replace) {
        return replace('/main/home');
      } },
    getChildRoutes: function getChildRoutes(location, callback) {
      var Counter = require('./routes/Counter').default;
      var Home = require('./routes/Home').default;
      callback(null, [Counter(store), Home(store)]);
    }
  };
}; /**
    * Created by whj57 on 2016/10/21.
    */

//# sourceMappingURL=index-compiled.js.map