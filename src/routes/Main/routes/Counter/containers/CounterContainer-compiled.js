'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _counter = require('../modules/counter');

var _Counter = require('../components/Counter');

var _Counter2 = _interopRequireDefault(_Counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the componen t doesn't care   */

var mapDispatchToProps = {
    increment: function increment() {
        return (0, _counter.increment)(1);
    },
    doubleAsync: _counter.doubleAsync
};

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

var mapStateToProps = function mapStateToProps(state) {
    return {
        counter: state.counter
    };
};

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Counter2.default);

//# sourceMappingURL=CounterContainer-compiled.js.map