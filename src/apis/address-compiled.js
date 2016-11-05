'use strict';

var _utils = require('../utils');

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by whj on 2016/7/2.
 */
exports.getProvince = function () {
    return (0, _utils.http)({
        url: '/Area/Province',
        type: 'get'
    });
};
exports.getCity = function (id) {
    var url = '/Area/City';
    if (id) {
        url = url + '/' + id;
    }
    return (0, _utils.http)({
        url: url,
        type: 'get'
    });
};
exports.getDistrict = function (id) {
    var url = '/Area/District';
    if (id) {
        url = url + '/' + id;
    }
    return (0, _utils.http)({
        url: url,
        type: 'get'
    });
};
exports.getCommunity = function (pid, cid, did, q) {
    return (0, _utils.http)({
        url: '/Community',
        type: 'get',
        data: {
            pid: pid,
            cid: cid,
            did: did,
            q: q
        }
    });
};

//# sourceMappingURL=address-compiled.js.map