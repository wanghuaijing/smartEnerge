'use strict';

var _utils = require('../utils');

exports.roleList = function (q) {
    var params = {};
    if (q) {
        params.q = q;
    }
    return (0, _utils.http)({
        url: '/Role',
        type: 'get',
        contentType: 'application/json; charset=utf-8',
        data: params
    });
}; /**
    * Created by whj on 2016/6/17.
    */


exports.getRoleDetail = function (id) {
    return (0, _utils.http)({
        url: '/Role/' + id
    });
};

//# sourceMappingURL=rolemanag-compiled.js.map