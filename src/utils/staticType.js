/**
 * Created by qizhang on 5/5/16.
 * 静态资源类型
 */
import appConfig from '../config'

//按时间查询枚举
export const timeBaseOnEnum = {
    multiYear: 0,
    year: 1,
    month: 2,
    day: 3
};

//按时间查询
export const timeBaseOn = [
    {
        name: '按多年', value: 0
    },
    {
        name: '按年', value: 1
    },
    {
        name: '按月', value: 2
    },
    {
        name: '按日', value: 3
    }
];
export const compareType = [
    {
        value:1,
        step:6,
        start:0,
        end:6,
        name:'上半年'
    }, {
        value:2,
        step:6,
        start:7,
        end:12,
        name:'下半年'
    }, {
        value:3,
        step:3,
        start:0,
        end:3,
        name:'第一季度'
    }, {
        value:4,
        step:3,
        start:3,
        end:6,
        name:'第二季度'
    },  {
        value:5,
        step:3,
        start:6,
        end:9,
        name:'第三季度'
    }, {
        value:6,
        step:3,
        start:9,
        end:12,
        name:'第四季度'
    },    {
        value:7,
        step:1,
        start:0,
        end:1,
        name:'一月'
    },{
        value:8,
        step:1,
        start:1,
        end:2,
        name:'二月'
    },{
        value:9,
        step:1,
        start:2,
        end:3,
        name:'三月'
    },{
        value:10,
        step:1,
        start:3,
        end:4,
        name:'四月'
    }, {
        value:11,
        step:1,
        start:4,
        end:5,
        name:'五月'
    },{
        value:12,
        step:1,
        start:5,
        end:6,
        name:'六月'
    },{
        value:13,
        step:1,
        start:6,
        end:7,
        name:'七月'
    },{
        value:14,
        step:1,
        start:7,
        end:8,
        name:'八月'
    },{
        value:15,
        step:1,
        start:8,
        end:9,
        name:'九月'
    },{
        value:16,
        step:1,
        start:9,
        end:10,
        name:'十月'
    },{
        value:17,
        step:1,
        start:10,
        end:11,
        name:'十一月'
    },{
        value:18,
        step:1,
        start:11,
        end:12,
        name:'十二月'
    }
];
export default {
    timeBaseOnEnum,
    timeBaseOn,
    compareType,
}
