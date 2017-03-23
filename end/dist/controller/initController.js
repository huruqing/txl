'use strict';

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _indexController = require('./indexController');

var _indexController2 = _interopRequireDefault(_indexController);

var _error = require('../common/error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initController = {
    getAllController: function getAllController(app) {
        // 错误处理的中间件要放在前面,因为用了await,
        // 它会执行了其他的路由,最后回来处理错误
        _error2.default.err(app);
        app.use((0, _koaSimpleRouter2.default)(function (_) {
            _.all('/getList', _indexController2.default.index());
            _.all('/addUser', _indexController2.default.addUser());
            //_.all('/delUser', index.delUser());
            _.all('/delUser', _indexController2.default.delUser());
            _.all('/saveUser', _indexController2.default.saveUser());
        }));
    }
};
module.exports = initController;