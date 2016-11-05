'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.USER_KEY = exports.TOKEN_KEY = undefined;

var _utils = require('utils');

var _store = require('store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 创建于：6/1/16
 * 创建人：杨骐彰
 * 说明：登录验证模块
 */

var TOKEN_KEY = exports.TOKEN_KEY = 'ef_token';
var USER_KEY = exports.USER_KEY = 'ef_user';

var Auth = {
    /**
     * 登录
     * @param uname
     * @param psd
     * @param cb
     */
    authorize: function authorize(uname, psd, cb) {
        var data = {
            CurPwd: psd,
            ClientId: 3,
            Role: 0
        };
        //电话登录
        if (/^\d*$/gi.test(uname)) {
            Object.assign(data, {
                LoginType: 2,
                Phone: uname
            });
        }
        //邮箱登录
        else if (/[^@\.]+@[^@\.]+\.[^@\.]+$/gi.test(uname)) {
                Object.assign(data, {
                    LoginType: 3,
                    Email: uname
                });
            } else {
                Object.assign(data, {
                    LoginType: 1,
                    Name: uname
                });
            }

        (0, _utils.http)({
            type: 'post',
            url: '/Account/Login?misc=UserInfo',
            data: data
        }).promise.then(function (res) {
            var data = res.Data;
            _store2.default.set(TOKEN_KEY, data.Token);
            _store2.default.set(USER_KEY, data.Extra.UserInfo);
            cb(null, data);
        }).catch(function (err) {
            cb(err);
        });
    },


    /**
     * 是否已登录
     */
    isAuthorized: function isAuthorized() {
        if (_store2.default.get(TOKEN_KEY)) {
            return true;
        } else return false;
    },


    /**
     * 退出登录
     */
    unAuthorize: function unAuthorize(cb) {
        _store2.default.remove(TOKEN_KEY);
        _store2.default.remove(USER_KEY);
        cb();
    },


    /**
     * 获取token
     * @returns {*}
     */
    getToken: function getToken() {
        return _store2.default.get(TOKEN_KEY);
    },


    /**
     * 获取用户信息
     * @returns {*|{}}
     */
    getUser: function getUser() {
        return _store2.default.get(USER_KEY) || {};
    }
};

exports.default = Auth;

//# sourceMappingURL=index-compiled.js.map