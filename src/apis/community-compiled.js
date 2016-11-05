'use strict';

var _utils = require('../utils');

/**
 * 获取小区列表
 */
exports.getCommunityList = function (q) {
    var data = {};
    if (q) {
        data = { q: q };
    }
    return (0, _utils.http)({
        url: '/Community',
        data: data
    });
};
/**
 * 添加小区
 */
/**
 * 创建于：6/3/16
 * 创建人：杨骐彰
 * 说明：小区接口
 */
exports.addCommunity = function (community) {

    return (0, _utils.http)({
        url: '/Community',
        type: 'post',
        data: community
    });
};
/**
 * 获取小区管理员列表
 */
exports.getCommunityManagerList = function (id) {
    return (0, _utils.http)({
        url: '/Community/CommunityUsers',
        data: {
            id: id
        }
    });
};
/**
 * 获取小区详情
 */
exports.getCommunityDetail = function (id) {
    return (0, _utils.http)({
        url: '/Community/' + id,
        type: 'get'
    });
};
/**
 * 修改小区信息
 */
exports.putCommunityDetail = function (community) {
    return (0, _utils.http)({
        url: '/Community',
        type: 'put',
        data: community
    });
};

//# sourceMappingURL=community-compiled.js.map