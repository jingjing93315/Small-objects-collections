/*
 * @Author: sk
 * @Date:   2016-02-22 17:22:19
 * @Last Modified by:   sk
 * @Last Modified time: 2016-02-22 17:26:23
 */

define(function(require, exports, module) {
    var Pagination = require('./pagination.js');
    var pager = new Pagination(1, 20, 7);
    pager.render('.pagination');
})
