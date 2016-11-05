/**
 * 创建于：6/8/16
 * 创建人：杨骐彰
 * 说明：设备接口
 */
import {http} from '../utils'
import Q from 'q'

/**
 * 获取设备列表
 * @param sn
 * @param cid
 * @param gid
 * @returns {{request, promise}}
 */
exports.getDeviceList = function (sn, cid, gid) {
    return http({
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
    return http({
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
    let param = {
        sn: sn || '',
        cid: cid || '',
        gid: gid || ''
    };

    let baseHttp = http({
        url: '/Device',
        data: Object.assign({}, param, {skip: skip, count: count})
    });

    let countHttp = http({
        url: '/Device',
        data: Object.assign({}, param, {count: 0})

    });

    return {
        request: [baseHttp.request, countHttp.request],
        promise: Q.all([baseHttp.promise, countHttp.promise])
    }
};

/**
 * 获取设备详情
 * @param id
 */
exports.getDeviceDetailInfo = function (id) {
    return http({
        url: `/Device?id=${id}`
    });
};


/**
 * 修改设备详情
 * @param data
 */
exports.saveDeviceInfoChange = function (id, data) {
    return http({
        type: 'put',
        url: `/Device?id=${id}`,
        contentType: 'application/json;utf-8',
        data: JSON.stringify(data)
    });
};

/**
 * 批量控制设备
 */
exports.controlDevice = function(data){
    return http ({
        type: 'post',
        url :'/Device',
        contentType :'application/json;uft-8',
        data:JSON.stringify(data)
    });
};
/**
 * 解绑设备
 */
exports.unbindDevice = function(data){
    return http({
        type:'put',
        url:'/Device/UnBind',
        contentType: 'application/json;uft-8',
        data:JSON.stringify(data)
    });
}

