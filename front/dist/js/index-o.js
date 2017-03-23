webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__(11);

var _common2 = _interopRequireDefault(_common);

var _constant = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ajax = _common2.default.ajax;

var Model = function () {
    function Model() {
        _classCallCheck(this, Model);
    }

    // 获取用户列表


    _createClass(Model, [{
        key: 'getList',
        value: function getList(data, suc) {
            var url = _constant.urlRoot + 'getList';
            ajax(url, data, function (res) {
                suc(res);
            });
        }
        // 提交

    }, {
        key: 'submit',
        value: function submit(data, suc) {
            var url = _constant.urlRoot + 'addUser';
            ajax(url, data, function (res) {
                suc(res);
            });
        }

        // 删除用户

    }, {
        key: 'delUser',
        value: function delUser() {
            var url = _constant.urlRoot + 'delUser';
            ajax(url, data, function (res) {
                suc(res);
            });
        }
    }]);

    return Model;
}();

exports.default = new Model();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xTagCore = __webpack_require__(3);

var _xTagCore2 = _interopRequireDefault(_xTagCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_xTagCore2.default.register('x-add', {
	content: '<div  style="display: none;" class="modal fade show" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: block;">\n\t\t\t<div class="modal-dialog" role="document">\n\t\t\t\t<div class="modal-content">\n\t\t\t\t\t<div class="modal-header">\n\t\t\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">\xD7</span></button>\n\t\t\t\t\t\t<h4 class="modal-title" id="exampleModalLabel">\u65B0\u589E\u7528\u6237</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="modal-body">\n\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="recipient-name" class="control-label">\u7528\u6237\u540D:</label>\n\t\t\t\t\t\t\t\t<input type="text" class="form-control" id="username" value="">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="recipient-name" class="control-label">\u5E74\u9F84:</label>\n\t\t\t\t\t\t\t\t<input type="text" class="form-control" id="age">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="recipient-name" class="control-label">\u7C4D\u8D2F:</label>\n\t\t\t\t\t\t\t\t<input type="text" class="form-control" id="addr" value="gx">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="modal-footer">\n\t\t\t\t\t\t\t\t<button id="close" type="reset" class="btn btn-default" data-dismiss="modal">\u5173\u95ED</button>\n\t\t\t\t\t\t\t\t<button id="submit" type="submit" class="btn btn-primary">\u63D0\u4EA4</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="maskLayer" class="modal-backdrop fade show" style="display: none;"></div>',
	lifecycle: {
		created: function created() {},
		inserted: function inserted() {},
		removed: function removed() {},
		attributeChanged: function attributeChanged() {}
	},
	methods: {
		someMethod: function someMethod() {}
	},
	accessors: {
		someAccessor: {
			// links to the 'some-accessor' attribute
			attribute: {},
			set: function set() {},
			get: function get() {}
		}
	},
	events: {
		tap: function tap() {},
		focus: function focus() {}
	}
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xTagCore = __webpack_require__(3);

var _xTagCore2 = _interopRequireDefault(_xTagCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_xTagCore2.default.register('x-users', {
    content: '\n    <div class="bs-example" data-example-id="contextual-table">\n\t\t\t\t<table class="table table-hover">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>\u7F16\u53F7</th>\n\t\t\t\t\t\t\t<th>\u59D3\u540D</th>\n\t\t\t\t\t\t\t<th>\u5E74\u9F84</th>\n\t\t\t\t\t\t\t<th>\u7C4D\u8D2F</th>\n\t\t\t\t\t\t\t<th>\u64CD\u4F5C&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t<a href="http://localhost:8080/index#" id="add">\u65B0\u589E</a>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody id="list">\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>',
    lifecycle: {
        created: function created() {},
        inserted: function inserted() {},
        removed: function removed() {},
        attributeChanged: function attributeChanged() {}
    },
    methods: {
        someMethod: function someMethod() {}
    },
    accessors: {
        someAccessor: {
            // links to the 'some-accessor' attribute
            attribute: {},
            set: function set() {},
            get: function get() {}
        }
    },
    events: {
        tap: function tap() {},
        focus: function focus() {}
    }
});

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jqueryMin = __webpack_require__(0);

var _jqueryMin2 = _interopRequireDefault(_jqueryMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Common = function () {
    function Common() {
        _classCallCheck(this, Common);
    }

    _createClass(Common, [{
        key: 'ajax',
        value: function ajax(url, data, suc) {
            _jqueryMin2.default.ajax({
                url: url,
                data: data,
                type: 'post',
                dataType: 'json',
                success: function success(res) {
                    if (res.code == 666) {
                        suc(res);
                    } else {
                        alert(res.msg || '请求失败');
                        console.log(url);
                    }
                },
                error: function error() {
                    alert('error');
                    console.log(url);
                }
            });
        }
    }]);

    return Common;
}();

exports.default = new Common();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var urlRoot = exports.urlRoot = 'http://localhost:3000/';

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // 首页组件


var _jqueryMin = __webpack_require__(0);

var _jqueryMin2 = _interopRequireDefault(_jqueryMin);

var _bootstrap = __webpack_require__(2);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _index = __webpack_require__(9);

var _index2 = _interopRequireDefault(_index);

var _header = __webpack_require__(1);

var _header2 = _interopRequireDefault(_header);

var _users = __webpack_require__(7);

var _users2 = _interopRequireDefault(_users);

var _add = __webpack_require__(6);

var _add2 = _interopRequireDefault(_add);

var _indexModel = __webpack_require__(5);

var _indexModel2 = _interopRequireDefault(_indexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function () {
    function Index() {
        _classCallCheck(this, Index);

        this.bindEvents();
        this.render();
        (0, _jqueryMin2.default)('li:eq(0)').css('background', 'gainsboro');
    }

    _createClass(Index, [{
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;
            (0, _jqueryMin2.default)('#add').click(function (ev) {
                ev.preventDefault();
                _this.toggleWrap();
            });
            (0, _jqueryMin2.default)('#submit').on('click', function (ev) {
                _this.submit(ev);
            });
            (0, _jqueryMin2.default)('#close').click(function (ev) {
                _this.toggleWrap();
            });
            (0, _jqueryMin2.default)('#list').on('click', '.del', function (ev) {
                _this.delUser(ev);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;
            _indexModel2.default.getList({}, function (res) {
                var html = '';
                _jqueryMin2.default.each(res.list, function (i, item) {
                    html += '\n  \t\t\t\t<tr>\n  \t\t\t\t\t<td>' + item.id + '</td>\n  \t\t\t\t\t<td>' + item.username + '</td>\n  \t\t\t\t\t<td>' + item.age + '</td>\n  \t\t\t\t\t<td>' + item.addr + '</td>\n  \t\t\t\t\t<td>\n  \t\t\t\t\t\t<a href="#">\u7F16\u8F91</a>&nbsp;&nbsp;&nbsp;\n  \t\t\t\t\t\t<a href="#" class="del" data-id="' + item.id + '">\u5220\u9664</a>\n  \t\t\t\t\t</td>\n  \t\t\t\t</tr>';
                });
                (0, _jqueryMin2.default)('#list').html(html);
            });
        }

        // 显示或隐藏弹框

    }, {
        key: 'toggleWrap',
        value: function toggleWrap() {
            if ((0, _jqueryMin2.default)('#maskLayer').css('display') === 'none') {
                (0, _jqueryMin2.default)('#maskLayer').show();
                (0, _jqueryMin2.default)('#exampleModal').show();
            } else {
                (0, _jqueryMin2.default)('#maskLayer').hide();
                (0, _jqueryMin2.default)('#exampleModal').hide();
            }
        }

        // 提交

    }, {
        key: 'submit',
        value: function submit(ev) {
            var _this = this;
            ev.preventDefault();
            var url = 'http://localhost/contactPhp/index.php/home/index/addUser';
            var data = {
                username: (0, _jqueryMin2.default)('#username').val(),
                age: (0, _jqueryMin2.default)('#age').val(),
                addr: (0, _jqueryMin2.default)('#addr').val()
            };
            this.ajax(url, data, function (res) {
                console.log('添加用户成功');
                _this.render();
                _this.toggleWrap();
            });
        }

        // 删除用户

    }, {
        key: 'delUser',
        value: function delUser(ev) {
            ev.preventDefault();
            var $target = (0, _jqueryMin2.default)(ev.currentTarget);
            console.log($target.data('id'));
            var $tr = (0, _jqueryMin2.default)(ev.target).closest('tr');
            var url = 'http://localhost/contactPhp/index.php/home/index/delUser';
            var data = {
                id: $target.data('id')
            };
            this.ajax(url, data, function (res) {
                if (res.code == 666) {
                    console.log('删除成功');
                    $tr.remove();
                } else {
                    console.log('删除失败');
                }
            });
        }
    }, {
        key: 'ajax',
        value: function ajax(url, data, suc) {
            _jqueryMin2.default.ajax({
                url: url,
                data: data,
                type: 'post',
                dataType: 'json',
                success: function success(res) {
                    suc(res);
                },
                error: function error() {
                    alert('error');
                }
            });
        }
    }]);

    return Index;
}();

var index = new Index();
exports.default = index;

console.log('---------------------');

/***/ })
],[14]);