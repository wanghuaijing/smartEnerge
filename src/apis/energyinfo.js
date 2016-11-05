/**
 * 创建于：6/6/16
 * 创建人：杨骐彰
 * 说明：能效信息
 */

import {http} from '../utils'
import Q from 'q'

/**
 * 获取今日用电信息
 * @param sns
 * @returns {{request, promise}}
 */
exports.getEnergyInfoToday = function (sns) {
    return http({
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
exports.getEnergyInfoTodayDetail = function(sns){
    return http({
        url:'/EnergyInfo/TodayDetail',
        type:'post',
        contentType:'application/json; charset=utf-8',
        data:JSON.stringify({
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
    return http({
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
exports.getEnergyDetailHistory = function(sns,form,startTime,endTime){
    return http({
        url:'/EnergyInfo/HistoryDetail',
        type:'post',
        contentType:'application/json; charset=utf-8',
        data:JSON.stringify({
            Sns:sns,
            Form:form,
            StartTime:startTime,
            EndTime: endTime
        })
    })
};
/**
 *获取劣势用电明细分页
 *
 */
exports.getEnergyDetailHistoryWithRange = function(sns,form,startTime,endTime,skip,count){
    let params ={
        Sns:sns,
        Form:form,
        StartTime:startTime,
        EndTime: endTime
    };
    let baseHttp = http({
        url:'/EnergyInfo/HistoryDetail',
        type:'post',
        contentType:'application/json; charset=utf-8',
        data:Object.assign({},params,{skip:skip,count:count})
    });
    let countHttp = http({
        url:'/EnergyInfo/HistoryDetail',
        type:'post',
        contentType:'application/json; charset=utf-8',
        data:Object.assign({},params,{count:0})
    });
    return {
        request: [baseHttp.request, countHttp.request],
        promise: Q.all([baseHttp.promise, countHttp.promise])
    }
};
/**
 * 获取温度和用电明细
 */
exports.getEnergyDetailWithT = function(startTime,endTime){
    let url = '/EnergyInfo/TempImpact?'+'start='+startTime+'&end='+endTime;
    return http({
        url:url,
        type:'get',
        contentType:'application/json; charset=utf-8',
    })

};
