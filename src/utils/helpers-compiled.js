'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStaticValueText = exports.getAuthorizeObj = exports.getApiFullAddress = undefined;

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取服务器接口地址
 * @param url
 * @returns {string}
 */
var getApiFullAddress = exports.getApiFullAddress = function getApiFullAddress(url) {
  if (url[0] !== '/') {
    url = '/' + url;
  }

  return _config2.default.apiHost + url;
};

/**
 * 获取权限验证头对象
 * @param token
 * @returns {*}
 */
/**
 * Created by whj57 on 2016/10/30.
 */
var getAuthorizeObj = exports.getAuthorizeObj = function getAuthorizeObj(token) {
  return {
    Authorization: 'HAuth ' + token
  };
};

/**
 * 根据资源类型和值获取文本
 * @param type
 * @param value
 * @returns {*}
 */
var getStaticValueText = exports.getStaticValueText = function getStaticValueText(type, value) {
  var values = _config2.default[type];
  if (Object.prototype.toString.call(values) === '[object Array]') {
    for (var i = 0, l = values.length; i < l; i++) {
      if (values[i].value == value) {
        return values[i].text;
      }
    }
    return 'unknown';
  } else {
    return values[value];
  }
};

exports.default = {
  getApiFullAddress: getApiFullAddress,
  getAuthorizeObj: getAuthorizeObj,
  getStaticValueText: getStaticValueText
};

//# sourceMappingURL=helpers-compiled.js.map