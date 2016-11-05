'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helpers = exports.staticType = exports.http = undefined;

var _http = require('./http');

var _http2 = _interopRequireDefault(_http);

var _staticType = require('./staticType');

var _staticType2 = _interopRequireDefault(_staticType);

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.http = _http2.default; /**
                                * Created by qizhang on 5/4/16.
                                * 工具库
                                */

exports.staticType = _staticType2.default;
exports.helpers = _helpers2.default;
exports.default = {
  http: _http2.default,
  staticType: _staticType2.default,
  helpers: _helpers2.default
};

//# sourceMappingURL=index-compiled.js.map