"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
// 枚举类型接口
/** 提取对象属性类型 */
/** 将数组中所有对象的 value 转换为联合类型 */
/** 将数组中所有对象的 alias 转换为联合类型 */
/** 将数组中所有对象的 label 转换为联合类型 */
// 获取枚举数组value的联合类型
// 枚举数组扩展类
var EnumX = exports["default"] = /*#__PURE__*/function (_Array) {
  function EnumX(list) {
    var _this;
    _classCallCheck(this, EnumX);
    _this = _callSuper(this, EnumX, _toConsumableArray(list));
    Object.setPrototypeOf(_this, EnumX.prototype);
    return _this;
  }
  _inherits(EnumX, _Array);
  return _createClass(EnumX, [{
    key: "fromValue",
    value:
    /**
     * 根据数值获取枚举项
     */
    function fromValue(value) {
      return this.find(function (item) {
        return item.value === value;
      });
    }

    /**
     * 根据别名获取枚举项
     */
  }, {
    key: "fromAlias",
    value: function fromAlias(alias) {
      return this.find(function (item) {
        return item.alias === alias;
      });
    }

    /**
     * 根据文字获取枚举项
     */
  }, {
    key: "fromText",
    value: function fromText(label) {
      return this.find(function (item) {
        return item.label === label;
      });
    }

    /**
     * 根据文字获取对应枚举项的文字
     */
  }, {
    key: "getTextFromValue",
    value: function getTextFromValue(value) {
      var _this$find;
      return (_this$find = this.find(function (item) {
        return item.value === value;
      })) === null || _this$find === void 0 ? void 0 : _this$find.label;
    }

    /**
     * 根据文字获取对应枚举项的文字
     */
  }, {
    key: "getTextFromAlias",
    value: function getTextFromAlias(alias) {
      var _this$fromAlias, _this$fromAlias2;
      return ((_this$fromAlias = this.fromAlias(alias)) === null || _this$fromAlias === void 0 ? void 0 : _this$fromAlias.label) || ((_this$fromAlias2 = this.fromAlias(alias)) === null || _this$fromAlias2 === void 0 ? void 0 : _this$fromAlias2.label);
    }

    /**
     * 根据数值获取对应枚举项的值
     */
  }, {
    key: "getValueFromAlias",
    value: function getValueFromAlias(alias) {
      var _this$fromAlias3;
      return (_this$fromAlias3 = this.fromAlias(alias)) === null || _this$fromAlias3 === void 0 ? void 0 : _this$fromAlias3.value;
    }

    /**
     * 根据文字获取对应枚举项的值
     */
  }, {
    key: "getValueFromText",
    value: function getValueFromText(label) {
      var _this$fromText;
      return (_this$fromText = this.fromText(label)) === null || _this$fromText === void 0 ? void 0 : _this$fromText.value;
    }

    /**
     * 根据数值获取对应枚举项的别名
     */
  }, {
    key: "getAliasFromValue",
    value: function getAliasFromValue(value) {
      var _this$fromValue;
      return (_this$fromValue = this.fromValue(value)) === null || _this$fromValue === void 0 ? void 0 : _this$fromValue.alias;
    }

    /**
     * 根据文字获取对应枚举项的别名
     */
  }, {
    key: "getAliasFromText",
    value: function getAliasFromText(label) {
      var _this$fromText2;
      return (_this$fromText2 = this.fromText(label)) === null || _this$fromText2 === void 0 ? void 0 : _this$fromText2.alias;
    }

    /**
     * 将当前枚举转换为数组，常用于下拉选择控件之类的数据源
     */
  }, {
    key: "toArray",
    value: function toArray() {
      var array = [];
      if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          var hint = i < 0 || arguments.length <= i ? undefined : arguments[i];
          if (typeof hint === 'string') {
            array.push(this.fromAlias(hint));
          } else {
            array.push(hint);
          }
        }
      } else {
        array = Array.from(this);
      }
      return array;
    }
  }], [{
    key: "createEnum",
    value: function createEnum(list) {
      return this.createProxy(list);
    }
  }, {
    key: "createProxy",
    value: function createProxy(list) {
      var handler = {
        get: function get(target, prop) {
          var found = list.find(function (item) {
            return item.alias === prop;
          });
          if (found) {
            return found.value;
          }
          return Reflect.get(target, prop);
        }
      };
      return new Proxy(new EnumX(list), handler);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(Array));