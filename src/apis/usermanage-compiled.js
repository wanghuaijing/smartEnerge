'use strict';

var _utils = require('../utils');

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
获取用户列表
 */
/**
 * Created by whj on 2016/6/14.
 */
exports.getUserList = function (q, communityId, isManage) {
    var apiData = {};
    if (q) {
        apiData.q = q;
    }
    if (communityId) {
        apiData.communityId = communityId;
    }
    if (isManage) {
        apiData.isManage = isManage;
    }
    return (0, _utils.http)({
        url: '/UserManage',
        data: apiData
    });
};
/**
 * 获取用户详细信息
 * */
exports.getUserDetail = function (id) {
    return (0, _utils.http)({
        url: '/UserManage/' + id
    });
};
/**
*编辑用户信息
 */
exports.saveUserDetail = function (id, param) {
    var params = param;
    params.Id = id;
    return (0, _utils.http)({
        type: 'put',
        url: '/UserManage',
        contentType: 'application/json;utf-8',
        data: JSON.stringify(params)
    });
};
/**
 *
 * 添加新用户
 */
exports.addUserDetail = function (param) {
    var params = param;
    console.log(param);
    return (0, _utils.http)({
        type: 'post',
        url: '/UserManage',
        contentType: 'application/json;utf-8',
        data: JSON.stringify(params)
    });
};
/**
 *
 * 禁用用户
 */
exports.disabledUser = function (id) {
    return (0, _utils.http)({
        url: '/UserManage/OnOff?id=' + id,
        type: 'delete'
    });
};
/**
 * 
 * 删除用户
 */
exports.deleteUser = function (id) {
    return (0, _utils.http)({
        url: '/UserManage?id=' + id,
        type: 'delete'
    });
};
/**
 * 获取用户列表分页
*/
exports.getUserListWithRange = function (params, skip, count) {
    var apiData = {};
    if (params.q) {
        apiData.q = params.q;
    }
    if (params.community) {
        apiData.communityId = params.community;
    }
    if (params.isManage) {
        apiData.isManage = params.isManage;
    }
    var baseHttp = (0, _utils.http)({
        url: '/UserManage',
        data: Object.assign({}, apiData, { skip: skip, count: count })
    });
    var countHttp = (0, _utils.http)({
        url: '/UserManage',
        data: Object.assign({}, apiData, { count: 0 })
    });
    return {
        request: [baseHttp.request, countHttp.request],
        promise: _q2.default.all([baseHttp.promise, countHttp.promise])
    };
};

//# sourceMappingURL=usermanage-compiled.js.map