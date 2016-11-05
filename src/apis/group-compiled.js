'use strict';

var _utils = require('../utils');

/**
 * 添加分组
 * @param data
 * @returns {{request, promise}}
 */
exports.addGroup = function (data) {
    return (0, _utils.http)({
        type: 'post',
        contentType: 'application/json; charset=utf-8',
        url: '/Group',
        data: JSON.stringify(data)
    });
};

/**
 * 修改分组
 * @param data
 * @returns {{request, promise}}
 */
/**
 * 创建于：6/3/16
 * 创建人：杨骐彰
 * 说明：小区接口
 */
exports.editGroup = function (data) {
    return (0, _utils.http)({
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        url: '/Group',
        data: JSON.stringify(data)
    });
};

/**
 * 获取分组列表
 * @param id
 * @param q
 * @returns {{request, promise}}
 */
exports.getGroupListByCommunityID = function (id, q) {
    return (0, _utils.http)({
        url: '/Group',
        data: {
            communityId: id,
            q: q
        }
    });
};

/**
 * 获取分组详情
 * @param id
 * @returns {{request, promise}}
 */
exports.getGroupDetailByID = function (id) {
    return (0, _utils.http)({
        url: '/Group/' + id
    });
};

/**
 * 解散分组
 * @param id
 * @returns {{request, promise}}
 */
exports.deleteGroup = function (id) {
    return (0, _utils.http)({
        type: 'delete',
        url: '/Group/' + id
    });
};

//# sourceMappingURL=group-compiled.js.map