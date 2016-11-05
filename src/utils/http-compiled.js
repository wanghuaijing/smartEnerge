'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getErrorMsg = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                   * Created by qizhang on 5/4/16.
                                                                                                                                                                                                                                                   * http请求工具函数
                                                                                                                                                                                                                                                   */


var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _auth = require('../auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.support.cors = true;

var ERROR_CODE = {
    'login': {
        '-4': '用户名或者密码错误',
        '-3': '没有找到此用户',
        '-5': '请输入合法的用户名或者密码'
    },
    'postExamGroup': {
        '-5': '成绩导入失败',
        '-6': '已存在此考试成绩',
        '-7': '你没有权限对该班级进行操作',
        '-12': '班级或成绩文件不存在'
    },
    'default': {
        '-3': '未找到数据',
        '-5': '参数不正确',
        '-6': '数据重复',
        '-7': '你没有执行此操作的权限',
        '-12': '你操作的对象不存在',
        '-14': '服务器返回了一个IO错误',
        '401': '你没有执行此操作的权限,请确定你是否是管理员，或者身份信息已过期，请重新登录',
        '404': '你访问的资源不存在（404）',
        '500': '服务器返回了一个错误',
        '-255': '服务器返回了一个错误',
        '-15': '你的账号已经在别处登录,请重新登录',
        '0': '请求失败,请检查网络'
    }
};

var getErrorMsg = exports.getErrorMsg = function getErrorMsg(code, type) {
    code = code.toString();
    if (!type || !ERROR_CODE[type]) {
        return ERROR_CODE['default'][code] || '未知错误:' + code;
    }
    if (ERROR_CODE[type][code]) {
        return ERROR_CODE[type][code];
    } else {
        return ERROR_CODE['default'][code] || '未知错误:' + code;
    }
};

var http = function http(url, config, type) {
    type = type || 'default';
    if (typeof url === 'string') {
        if (typeof config === 'string') {
            type = config;
            config = {
                url: url
            };
        } else if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
            config.url = url;
        } else {
            config = {
                url: url
            };
        }
    } else {
        type = config;
        config = url;
    }
    if (!config.headers) {
        config.headers = {};
    }

    config.headers.Authorization = _auth2.default.getToken() ? 'CAuth ' + _auth2.default.getToken() : '';
    config.url = '' + _config2.default.apiHost + config.url;
    config.cache = false;
    var deferred = _q2.default.defer();
    var ajax = _jquery2.default.ajax(config).done(function (res) {
        if (res.State >= 0) {
            deferred.resolve(res);
        } else {
            deferred.reject({
                code: res.State,
                msg: getErrorMsg(res.State, type)
            });
        }
    }).fail(function (error) {
        if (error.statusText === 'abort') {
            deferred.reject({
                code: error.status,
                abort: true
            });
        } else {
            deferred.reject({
                code: error.status,
                msg: getErrorMsg(error.status, type)
            });
        }
    });
    return {
        request: ajax,
        promise: deferred.promise
    };
};

exports.default = http;

//# sourceMappingURL=http-compiled.js.map