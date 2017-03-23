'use strict';

var _indexModel = require('../model/indexModel');

var _indexModel2 = _interopRequireDefault(_indexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var indexController = {
	index: function index() {
		var _this = this;

		return function () {
			var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
				var model, result;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								model = new _indexModel2.default();
								_context.next = 3;
								return model.index();

							case 3:
								result = _context.sent;

								ctx.body = result;
								//ctx.render('index',{list:JSON.parse(result).list});

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this);
			}));

			return function (_x, _x2) {
				return _ref.apply(this, arguments);
			};
		}();
	},
	addUser: function addUser() {
		var _this2 = this;

		return function () {
			var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
				var model, result;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								model = new _indexModel2.default();
								_context2.next = 3;
								return model.addUser(ctx.request.body);

							case 3:
								result = _context2.sent;

								ctx.body = result;

							case 5:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this2);
			}));

			return function (_x3, _x4) {
				return _ref2.apply(this, arguments);
			};
		}();
	},
	delUser: function delUser() {
		var _this3 = this;

		return function () {
			var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx, next) {
				var model, result;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								model = new _indexModel2.default();
								_context3.next = 3;
								return model.delUser(ctx.request.body);

							case 3:
								result = _context3.sent;

								ctx.body = result;

							case 5:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this3);
			}));

			return function (_x5, _x6) {
				return _ref3.apply(this, arguments);
			};
		}();
	},
	saveUser: function saveUser() {
		var _this4 = this;

		return function () {
			var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(ctx, next) {
				var model, result;
				return regeneratorRuntime.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								model = new _indexModel2.default();
								_context4.next = 3;
								return model.saveUser();

							case 3:
								result = _context4.sent;

								ctx.body = result;

							case 5:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, _this4);
			}));

			return function (_x7, _x8) {
				return _ref4.apply(this, arguments);
			};
		}();
	}
};
module.exports = indexController;