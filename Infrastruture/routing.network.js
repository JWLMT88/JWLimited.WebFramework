/*
   ------------------------------------------------------------------------------
   Copyright (c) 2024 JW Limited. All rights reserved.

   Project: JWLimited.WebFramework
   Module: Routing
   File: routing.network.js
   Company: JW Limited (licensed)
   Author: Joe Valentino Lengefeld (CEO)

   This software is proprietary to JW Limited and constitutes valuable 
   intellectual property. It is entrusted solely to employees named above
   and may not be disclosed, copied, reproduced, transmitted, or used in 
   any manner outside of the scope of its license without prior written
   authorization from JW Limited.

   ------------------------------------------------------------------------------
*/

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() { } function GeneratorFunction() { } function GeneratorFunctionPrototype() { } var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a; ;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var RouteNode = /*#__PURE__*/function () {
  function RouteNode(a, b) {
    if (b === void 0) {
      b = null;
    }
    this.segment = a, this.parent = b, this.children = new Map(), this.handlers = new Set(), this.params = new Map();
  }
  var _proto = RouteNode.prototype;
  _proto.addHandler = function addHandler(a) {
    this.handlers.add(a);
  };
  _proto.addParam = function addParam(a, b) {
    this.params.set(a, b);
  };
  return RouteNode;
}();
var Router = /*#__PURE__*/function () {
  function Router(a) {
    if (a === void 0) {
      a = {};
    }
    this.root = new RouteNode(""), this.currentRoute = null, this.middlewares = [], this.hooks = {
      beforeEach: [],
      afterEach: [],
      beforeEnter: new Map(),
      afterEnter: new Map(),
      beforeLeave: new Map(),
      afterLeave: new Map()
    }, this.options = _extends({
      mode: "history",
      base: "",
      scrollBehavior: null
    }, a), this.history = window.history, this.errorHandler = a.errorHandler || console.error, this.notFoundHandler = a.notFoundHandler || function () {
      return "<h1>404 Not Found</h1>";
    }, this.loadingComponent = a.loadingComponent || function () {
      return "<div>Loading...</div>";
    }, this.cache = new Map(), this.pendingNavigation = null;
  }
  var _proto2 = Router.prototype;
  _proto2.use = function use(a) {
    return this.middlewares.push(a), this;
  };
  _proto2.on = function on(a, b, c) {
    return c ? (!this.hooks[a].has(c) && this.hooks[a].set(c, []), this.hooks[a].get(c).push(b)) : this.hooks[a].push(b), this;
  };
  _proto2.addRoute = function addRoute(a, b, c) {
    if (c === void 0) {
      c = {};
    }
    var d = this.root;
    var e = a.split("/").filter(Boolean);
    for (var _iterator = _createForOfIteratorHelperLoose(e, true), _step; !(_step = _iterator()).done;) {
      var f = _step.value;
      d.children.has(f) || d.children.set(f, new RouteNode(f, d)), d = d.children.get(f);
    }
    if (d.addHandler(b), c.name && this.namedRoutes.set(c.name, {
      path: a,
      handler: b,
      options: c
    }), c.params) for (var _i = 0, _Object$entries = Object.entries(c.params); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _Object$entries[_i],
        _a = _Object$entries$_i[0],
        _b = _Object$entries$_i[1];
      d.addParam(_a, _b);
    }
    return this;
  };
  _proto2.resolve = /*#__PURE__*/function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(a) {
      var b, c, d, e, _iterator2, _step2, f, _a2, _iterator3, _step3, _step3$value, _b2, _e, _a3;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            b = a.split("/").filter(Boolean);
            c = this.root;
            d = {}, e = [];
            _iterator2 = _createForOfIteratorHelperLoose(b, true);
          case 4:
            if ((_step2 = _iterator2()).done) {
              _context.next = 25;
              break;
            }
            f = _step2.value;
            _a2 = !1;
            _iterator3 = _createForOfIteratorHelperLoose(c.children, true);
          case 8:
            if ((_step3 = _iterator3()).done) {
              _context.next = 20;
              break;
            }
            _step3$value = _step3.value, _b2 = _step3$value[0], _e = _step3$value[1];
            if (!(_b2 === f || _e.params.has(_b2.slice(1)))) {
              _context.next = 18;
              break;
            }
            if (!_e.params.has(_b2.slice(1))) {
              _context.next = 16;
              break;
            }
            _a3 = _e.params.get(_b2.slice(1));
            if (!(_a3 && !_a3(f))) {
              _context.next = 15;
              break;
            }
            return _context.abrupt("continue", 18);
          case 15:
            d[_b2.slice(1)] = f;
          case 16:
            c = _e, _a2 = !0;
            return _context.abrupt("break", 20);
          case 18:
            _context.next = 8;
            break;
          case 20:
            if (_a2) {
              _context.next = 22;
              break;
            }
            return _context.abrupt("return", {
              handlers: [this.notFoundHandler],
              params: d
            });
          case 22:
            e.push.apply(e, c.handlers);
          case 23:
            _context.next = 4;
            break;
          case 25:
            return _context.abrupt("return", {
              handlers: e.length ? e : [this.notFoundHandler],
              params: d
            });
          case 26:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }
    return resolve;
  }();
  _proto2.navigate = /*#__PURE__*/function () {
    var _navigate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(a, b) {
      var _this = this;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (b === void 0) {
              b = {};
            }
            _context3.t0 = this.pendingNavigation;
            if (!_context3.t0) {
              _context3.next = 5;
              break;
            }
            _context3.next = 5;
            return this.pendingNavigation;
          case 5:
            this.pendingNavigation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _yield$_this$resolve, _b3, c, d, _e2, _iterator4, _step4, _a5, _a4, _iterator5, _step5, _b4, f, _iterator6, _step6, _a6, _iterator7, _step7, _a7, g, h, _iterator8, _step8, _a8, _b5, i, _iterator9, _step9, _a9, _iterator10, _step10, _a10;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return _this.resolve(a);
                  case 3:
                    _yield$_this$resolve = _context2.sent;
                    _b3 = _yield$_this$resolve.handlers;
                    c = _yield$_this$resolve.params;
                    d = _this.currentRoute;
                    _e2 = {
                      path: a,
                      params: c,
                      handlers: _b3
                    };
                    _iterator4 = _createForOfIteratorHelperLoose(_this.hooks.beforeEach, true);
                  case 9:
                    if ((_step4 = _iterator4()).done) {
                      _context2.next = 15;
                      break;
                    }
                    _a5 = _step4.value;
                    _context2.next = 13;
                    return _a5(_e2, d);
                  case 13:
                    _context2.next = 9;
                    break;
                  case 15:
                    if (!d) {
                      _context2.next = 24;
                      break;
                    }
                    _a4 = _this.hooks.beforeLeave.get(d.path) || [];
                    _iterator5 = _createForOfIteratorHelperLoose(_a4, true);
                  case 18:
                    if ((_step5 = _iterator5()).done) {
                      _context2.next = 24;
                      break;
                    }
                    _b4 = _step5.value;
                    _context2.next = 22;
                    return _b4(_e2, d);
                  case 22:
                    _context2.next = 18;
                    break;
                  case 24:
                    f = _this.hooks.beforeEnter.get(a) || [];
                    _iterator6 = _createForOfIteratorHelperLoose(f, true);
                  case 26:
                    if ((_step6 = _iterator6()).done) {
                      _context2.next = 32;
                      break;
                    }
                    _a6 = _step6.value;
                    _context2.next = 30;
                    return _a6(_e2, d);
                  case 30:
                    _context2.next = 26;
                    break;
                  case 32:
                    _iterator7 = _createForOfIteratorHelperLoose(_this.middlewares, true);
                  case 33:
                    if ((_step7 = _iterator7()).done) {
                      _context2.next = 39;
                      break;
                    }
                    _a7 = _step7.value;
                    _context2.next = 37;
                    return _a7(_e2, d);
                  case 37:
                    _context2.next = 33;
                    break;
                  case 39:
                    g = document.getElementById("app");
                    g.innerHTML = _this.loadingComponent();
                    h = "";
                    _iterator8 = _createForOfIteratorHelperLoose(_b3, true);
                  case 43:
                    if ((_step8 = _iterator8()).done) {
                      _context2.next = 55;
                      break;
                    }
                    _a8 = _step8.value;
                    if (!("function" == typeof _a8)) {
                      _context2.next = 52;
                      break;
                    }
                    _context2.next = 48;
                    return _a8(c);
                  case 48:
                    _b5 = _context2.sent;
                    h += _b5;
                    _context2.next = 53;
                    break;
                  case 52:
                    "string" == typeof _a8 && (h += _a8);
                  case 53:
                    _context2.next = 43;
                    break;
                  case 55:
                    g.innerHTML = h, _this.currentRoute = _e2, "history" === _this.options.mode ? _this.history.pushState(null, "", _this.options.base + a) : window.location.hash = a;
                    i = _this.hooks.afterEnter.get(a) || [];
                    _iterator9 = _createForOfIteratorHelperLoose(i, true);
                  case 58:
                    if ((_step9 = _iterator9()).done) {
                      _context2.next = 64;
                      break;
                    }
                    _a9 = _step9.value;
                    _context2.next = 62;
                    return _a9(_e2, d);
                  case 62:
                    _context2.next = 58;
                    break;
                  case 64:
                    _iterator10 = _createForOfIteratorHelperLoose(_this.hooks.afterEach, true);
                  case 65:
                    if ((_step10 = _iterator10()).done) {
                      _context2.next = 71;
                      break;
                    }
                    _a10 = _step10.value;
                    _context2.next = 69;
                    return _a10(_e2, d);
                  case 69:
                    _context2.next = 65;
                    break;
                  case 71:
                    _context2.t0 = _this.options.scrollBehavior;
                    if (!_context2.t0) {
                      _context2.next = 75;
                      break;
                    }
                    _context2.next = 75;
                    return _this.options.scrollBehavior(_e2, d);
                  case 75:
                    _this.cache.set(a, h);
                    _context2.next = 81;
                    break;
                  case 78:
                    _context2.prev = 78;
                    _context2.t1 = _context2["catch"](0);
                    _this.errorHandler(_context2.t1);
                  case 81:
                    _context2.prev = 81;
                    _this.pendingNavigation = null;
                    return _context2.finish(81);
                  case 84:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, null, [[0, 78, 81, 84]]);
            }))();
            _context3.next = 8;
            return this.pendingNavigation;
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function navigate(_x2, _x3) {
      return _navigate.apply(this, arguments);
    }
    return navigate;
  }();
  _proto2.start = function start() {
    var _this2 = this;
    window.addEventListener("popstate", function () {
      return _this2.navigate(window.location.pathname);
    }), document.body.addEventListener("click", function (a) {
      if (a.target.matches("a") && a.target.href.startsWith(window.location.origin)) {
        a.preventDefault();
        var b = new URL(a.target.href).pathname.slice(_this2.options.base.length);
        _this2.navigate(b);
      }
    }), "hash" === this.options.mode && window.addEventListener("hashchange", function () {
      var a = window.location.hash.slice(1);
      _this2.navigate(a);
    });
    var a = "history" === this.options.mode ? window.location.pathname.slice(this.options.base.length) : window.location.hash.slice(1);
    this.navigate(a);
  };
  _proto2.generatePath = function generatePath(a, b) {
    if (b === void 0) {
      b = {};
    }
    var c = this.namedRoutes.get(a);
    if (!c) throw new Error("Route \"" + a + "\" not found");
    var d = c.path;
    for (var _i2 = 0, _Object$entries2 = Object.entries(b); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _Object$entries2[_i2],
        _c = _Object$entries2$_i[0],
        _e3 = _Object$entries2$_i[1];
      d = d.replace(":" + _c, encodeURIComponent(_e3));
    }
    return this.options.base + d;
  };
  _proto2.clearCache = function clearCache(a) {
    a ? this.cache["delete"](a) : this.cache.clear();
  };
  return Router;
}();