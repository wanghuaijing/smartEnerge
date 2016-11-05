'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _login = require('../modules/login');

var _components = require('../components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = {
  inputChange: _login.inputChange,
  isLoginHandler: _login.isLoginHandler
}; /**
    * Created by whj57 on 2016/10/31.
    */


var mapStateToProps = function mapStateToProps(state) {
  return {
    login: state.login
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_components2.default);

//# sourceMappingURL=LoginContainer-compiled.js.map