'use strict';

var _utils = require('../utils');

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取今日用电信息
 * @param sns
 * @returns {{request, promise}}
 */
/**
 * 创建于：6/6/16
 * 创建人：杨骐彰
 * 说明：能效信息
 */

exports.getEnergyInfoToday = function (sns) {
    return (0, _utils.http)({
        url: '/EnergyInfo/Today',
        type: 'post',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            Sns: sns
        })
    });
};
/**
 * 获取今日用电明细
 */
exports.getEnergyInfoTodayDetail = function (sns) {
    return (0, _utils.http)({
        url: '/EnergyInfo/TodayDetail',
        type: 'post',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            Sns: sns
        })
    });
};

/**
 * 获取历史用电信息
 * @param sns
 * @param form
 * @param startTime
 * @param endTime
 * @returns {{request, promise}}
 */
/**
 * 获取历史用电信息
 * @param 
 * @returns {{request, promise}}
 */
exports.getEnergyInfoHistory = function (sns, form, startTime, endTime) {
    return (0, _utils.http)({
        url: '/EnergyInfo/History',
        type: 'post',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            Sns: sns,
            Form: form,
            StartTime: startTime,
            EndTime: endTime
        })
    });
};
/**
 * 获取历史用电明细
 * @param 
 * @returns {{request, promise}}
 */
exports.getEnergyDetailHistory = function (sns, form, startTime, endTime) {
    return (0, _utils.http)({
        url: '/EnergyInfo/HistoryDetail',
        type: 'post',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            Sns: sns,
            Form: form,
            StartTime: startTime,
            EndTime: endTime
        })
    });
};
/**
 *获取劣势用电明细分页
 *
 */
exports.getEnergyDetailHistoryWithRange = function (sns, form, startTime, endTime, skip, count) {
    var params = {
        Sns: sns,
        Form: form,
        StartTime: startTime,
        EndTime: endTime
    };
    var baseHttp = (0, _utils.http)({
        url: '/EnergyInfo/HistoryDetail',
        type: 'post',
        contentType: 'application/json; charset=utf-8',
        data: Object.assign({}, params, { skip: skip, count: count })
    });
    var countHttp = (0, _utils.http)({
        url: '/EnergyInfo/HistoryDetail',
        type: 'post',
        contentType: 'application/json; charset=utf-8',
        data: Object.assign({}, params, { count: 0 })
    });
    return {
        request: [baseHttp.request, countHttp.request],
        promise: _q2.default.all([baseHttp.promise, countHttp.promise])
    };
};
/**
 * 获取温度和用电明细
 */
exports.getEnergyDetailWithT = function (startTime, endTime) {
    var url = '/EnergyInfo/TempImpact?' + 'start=' + startTime + '&end=' + endTime;
    return (0, _utils.http)({
        url: url,
        type: 'get',
        contentType: 'application/json; charset=utf-8'
    });
};

//# sourceMappingURL=energyinfo-compiled.js.map