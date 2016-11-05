'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.loginHandler = exports.AJAX_STATE = exports.LOGIN_LOGIN = undefined;

var _ACTION_HANDLERS;

exports.isLoginHandler = isLoginHandler;
exports.inputChange = inputChange;
exports.loginInputReducer = loginInputReducer;

var _auth = require('auth');

var _auth2 = _interopRequireDefault(_auth);

var _store = require('store');

var _store2 = _interopRequireDefault(_store);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by whj57 on 2016/10/30.
                                                                                                                                                                                                                   */


var LOGIN_LOGIN = exports.LOGIN_LOGIN = "LOGIN_LOGIN";
var AJAX_STATE = exports.AJAX_STATE = "AJAX_STATE";
function isLoginHandler(value) {
  return {
    type: AJAX_STATE,
    payload: {
      isLogining: value
    }
  };
}

function inputChange(value) {
  console.log(value);
  return {
    type: LOGIN_LOGIN,
    payload: {
      loginData: value
    }
  };
}

var loginHandler = exports.loginHandler = function loginHandler() {
  return function (dispatch, getState) {
    dispatch(isLoginHandler(true));
    _auth2.default.authorize(getState().loginData.username, getState().loginData.password, dispatch(isLoginHandler(false)));
  };
};

var actions = exports.actions = {
  isLoginHandler: isLoginHandler,
  inputChange: inputChange,
  loginHandler: loginHandler
};

var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, _defineProperty(_ACTION_HANDLERS, LOGIN_LOGIN, function (state, action) {
  return Object.assign(state, action.payload);
}), _defineProperty(_ACTION_HANDLERS, AJAX_STATE, function (state, action) {
  return Object.assign(state, action.payload);
}), _ACTION_HANDLERS);
var initialState = {
  loginData: {
    username: '',
    password: ''
  },
  isLogining: false
};
function loginInputReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

exports.default = loginInputReducer;

//# sourceMappingURL=login-compiled.js.map