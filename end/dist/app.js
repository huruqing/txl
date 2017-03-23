'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('./conf/config');

var _config2 = _interopRequireDefault(_config);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaBody = require('koa-body');

var _koaBody2 = _interopRequireDefault(_koaBody);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _koaCors = require('koa-cors');

var _koaCors2 = _interopRequireDefault(_koaCors);

var _initController = require('./controller/initController');

var _initController2 = _interopRequireDefault(_initController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
// 补完babel支持es6的拓展包

// 跨域

// 允许 http://localhost:8080访问
app.use((0, _koaCors2.default)({
    origin: 'http://localhost:8080'
}));
app.use((0, _koaStatic2.default)(_config2.default.get('publicDir')));
//app.use(serv(path.join(__dirname, '..', 'public')));
app.use((0, _koaBody2.default)({ formidable: { uploadDir: __dirname } }));

_initController2.default.getAllController(app);
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
    root: _config2.default.get('viewsDir'),
    autoescape: true,
    cache: 'memory',
    ext: 'html'
}));

app.listen(_config2.default.get('port'), function () {
    console.log('server started at locahost:3000');
});
exports.default = app;