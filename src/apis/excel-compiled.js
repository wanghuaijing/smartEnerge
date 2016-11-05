'use strict';

var _utils = require('../utils');

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by whj on 2016/6/30.
 */
exports.exportDevice = function () {
    return (0, _utils.http)({
        url: '/DeviceExcel',
        type: 'get'
    });
};

exports.uploaderDevice = function (data) {
    return (0, _utils.http)({
        url: "/DeviceExcel",
        type: 'post',
        data: data,
        processData: false,
        contentType: false
    });
};

//# sourceMappingURL=excel-compiled.js.map