'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var indexModel = function () {
    function indexModel() {
        _classCallCheck(this, indexModel);
    }

    _createClass(indexModel, [{
        key: 'index',
        value: function index() {
            return new Promise(function (resolve, reject) {
                _request2.default.post({
                    url: 'http://localhost/contactPhp/index.php/home/index/getList',
                    formData: {}
                }, function optionalCallback(err, httpResponse, body) {
                    if (err) {
                        reject('查询列表失败');
                    } else {
                        resolve(body);
                    }
                });
            });
        }
    }, {
        key: 'addUser',
        value: function addUser(postData) {
            return new Promise(function (resolve, reject) {
                _request2.default.post({
                    url: 'http://localhost/contactPhp/index.php/home/index/addUser',
                    formData: postData
                }, function optionalCallback(err, httpResponse, body) {
                    if (err) {
                        // reject(new Error('查询列表失败'));
                        console.log('失败');
                        throw new Error('查询列表失败');
                    } else {
                        resolve(body);
                    }
                });
            });
        }
    }, {
        key: 'delUser',
        value: function delUser(postData) {
            return new Promise(function (resolve, reject) {
                _request2.default.post({
                    url: 'http://localhost/contactPhp/index.php/home/index/delUser',
                    formData: postData
                }, function optionalCallback(err, httpResponse, body) {
                    if (err) {
                        // reject(new Error('查询列表失败'));
                        console.log('失败');
                        throw new Error('删除用户失败');
                    } else {
                        resolve(body);
                    }
                });
            });
        }
    }, {
        key: 'saveUser',
        value: function saveUser() {
            return new Promise(function (suc, fail) {
                setTimeout(function functionName() {
                    suc('saveUser');
                }, 2000);
            });
        }
    }]);

    return indexModel;
}();

exports.default = indexModel;