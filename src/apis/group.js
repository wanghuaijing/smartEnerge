/**
 * 创建于：6/3/16
 * 创建人：杨骐彰
 * 说明：小区接口
 */
import {http} from '../utils'

/**
 * 添加分组
 * @param data
 * @returns {{request, promise}}
 */
exports.addGroup = function (data) {
    return http({
        type:'post',
        contentType:'application/json; charset=utf-8',
        url: `/Group`,
        data:JSON.stringify(data)
    });
};

/**
 * 修改分组
 * @param data
 * @returns {{request, promise}}
 */
exports.editGroup = function (data) {
    return http({
        type:'put',
        contentType:'application/json; charset=utf-8',
        url: `/Group`,
        data:JSON.stringify(data)
    });
};

/**
 * 获取分组列表
 * @param id
 * @param q
 * @returns {{request, promise}}
 */
exports.getGroupListByCommunityID = function (id, q) {
    return http({
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
    return http({
        url: `/Group/${id}`
    });
};

/**
 * 解散分组
 * @param id
 * @returns {{request, promise}}
 */
exports.deleteGroup = function (id) {
    return http({
        type:'delete',
        url: `/Group/${id}`
    });
};


