"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _ArrowLeft = _interopRequireDefault(require("@material-ui/icons/ArrowLeft"));

var _ArrowRight = _interopRequireDefault(require("@material-ui/icons/ArrowRight"));

var _moment = _interopRequireDefault(require("moment"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'space-between',
      margin: "".concat(theme.spacing(1), "px 0")
    }
  };
};

var CalendarToolbar =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarToolbar, _Component);

  function CalendarToolbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalendarToolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalendarToolbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleTouchTapPrevMonth", function (e) {
      e.preventDefault();

      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(-1);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchTapNextMonth", function (e) {
      e.preventDefault();

      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(1);
      }
    });

    return _this;
  }

  _createClass(CalendarToolbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          displayDate = _this$props.displayDate;
      var dateTimeFormatted = (0, _moment["default"])(displayDate).format('MMMM YYYY'); // const dateTimeFormatted = new dateTimeFormat('en-US', {
      //   month: 'long',
      //   year: 'numeric'
      // }).format(displayDate)

      return _react["default"].createElement("div", {
        className: classes.root
      }, _react["default"].createElement(_core.IconButton, {
        disabled: !this.props.prevMonth,
        onClick: this.handleTouchTapPrevMonth
      }, _react["default"].createElement(_ArrowLeft["default"], null)), _react["default"].createElement(_core.Typography, {
        variant: "subtitle1"
      }, (0, _utils.capitalizeFirstLetter)(dateTimeFormatted)), _react["default"].createElement(_core.IconButton, {
        disabled: !this.props.nextMonth,
        onClick: this.handleTouchTapNextMonth
      }, _react["default"].createElement(_ArrowRight["default"], null)));
    }
  }]);

  return CalendarToolbar;
}(_react.Component);

_defineProperty(CalendarToolbar, "propTypes", {
  displayDate: _propTypes["default"].object.isRequired,
  nextMonth: _propTypes["default"].bool,
  onMonthChange: _propTypes["default"].func,
  prevMonth: _propTypes["default"].bool
});

_defineProperty(CalendarToolbar, "defaultProps", {
  nextMonth: true,
  prevMonth: true
});

var _default = (0, _core.withStyles)(styles)(CalendarToolbar);

exports["default"] = _default;