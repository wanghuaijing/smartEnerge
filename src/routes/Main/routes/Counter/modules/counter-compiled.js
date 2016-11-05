'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increment = increment;
exports.default = counterReducer;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ------------------------------------
// Constants
// ------------------------------------
var COUNTER_INCREMENT = exports.COUNTER_INCREMENT = 'COUNTER_INCREMENT';

// ------------------------------------
// Actions
// ------------------------------------
function increment() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  return {
    type: COUNTER_INCREMENT,
    payload: value
  };
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

var doubleAsync = exports.doubleAsync = function doubleAsync() {
  return function (dispatch, getState) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        dispatch(increment(getState().counter));
        resolve();
      }, 200);
    });
  };
};

var actions = exports.actions = {
  increment: increment,
  doubleAsync: doubleAsync
};

// ------------------------------------
// Action Handlers
// ------------------------------------
var ACTION_HANDLERS = _defineProperty({}, COUNTER_INCREMENT, function (state, action) {
  return state + action.payload;
});

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = 0;
function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

//# sourceMappingURL=counter-compiled.js.map