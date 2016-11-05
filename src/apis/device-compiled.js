'use strict';

var _utils = require('../utils');

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取设备列表
 * @param sn
 * @param cid
 * @param gid
 * @returns {{request, promise}}
 */
/**
 * 创建于：6/8/16
 * 创建人：杨骐彰
 * 说明：设备接口
 */
exports.getDeviceList = function (sn, cid, gid) {
    return (0, _utils.http)({
        url: '/Device',
        data: {
            sn: sn || '',
            cid: cid || '',
            gid: gid || ''
        }
    });
};

/**
 * 获取设备列表
 * @param sn
 * @param cid
 * @param gid
 * @returns {{request, promise}}
 */
exports.getDeviceList = function (sn, cid, gid) {
    return (0, _utils.http)({
        url: '/Device',
        data: {
            sn: sn || '',
            cid: cid || '',
            gid: gid || ''
        }
    });
};

/**
 * 获取设备列表分页
 * @param sn
 * @param cid
 * @param gid
 * @param skip
 * @param count
 * @returns {{request, promise}}
 */
exports.getDeviceListWithRange = function (skip, count, sn, cid, gid) {
    var param = {
        sn: sn || '',
        cid: cid || '',
        gid: gid || ''
    };

    var baseHttp = (0, _utils.http)({
        url: '/Device',
        data: Object.assign({}, param, { skip: skip, count: count })
    });

    var countHttp = (0, _utils.http)({
        url: '/Device',
        data: Object.assign({}, param, { count: 0 })

    });

    return {
        request: [baseHttp.request, countHttp.request],
        promise: _q2.default.all([baseHttp.promise, countHttp.promise])
    };
};

/**
 * 获取设备详情
 * @param id
 */
exports.getDeviceDetailInfo = function (id) {
    return (0, _utils.http)({
        url: '/Device?id=' + id
    });
};

/**
 * 修改设备详情
 * @param data
 */
exports.saveDeviceInfoChange = function (id, data) {
    return (0, _utils.http)({
        type: 'put',
        url: '/Device?id=' + id,
        contentType: 'application/json;utf-8',
        data: JSON.stringify(data)
    });
};

/**
 * 批量控制设备
 */
exports.controlDevice = function (data) {
    return (0, _utils.http)({
        type: 'post',
        url: '/Device',
        contentType: 'application/json;uft-8',
        data: JSON.stringify(data)
    });
};
/**
 * 解绑设备
 */
exports.unbindDevice = function (data) {
    return (0, _utils.http)({
        type: 'put',
        url: '/Device/UnBind',
        contentType: 'application/json;uft-8',
        data: JSON.stringify(data)
    });
};

//# sourceMappingURL=device-compiled.js.map