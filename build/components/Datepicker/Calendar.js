"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _WeekHeader = _interopRequireDefault(require("./WeekHeader"));

var _Month = _interopRequireDefault(require("./Month"));

var _dateUtils = require("./dateUtils");

var _CalendarToolbar = _interopRequireDefault(require("./CalendarToolbar"));

var _CalendarButtons = _interopRequireDefault(require("./CalendarButtons"));

var _DateDisplay = _interopRequireDefault(require("./DateDisplay"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      flex: '1',
      display: 'block',
      maxHeight: '100%' // overflow: 'scroll'

    },
    selectorContainer: {
      // marginTop: theme.spacing(2)
      // boxShadow: 'inset 0 0 10px #000000'
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    calendarContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      padding: "0 ".concat(theme.spacing(1), "px")
    }
  };
}); // const StyledCalendar = styled.div`
//   display: flex;
//   flex-direction: column;
// `

var Calendar = function Calendar(_ref) {
  var initialDate = _ref.initialDate,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      selectedDates = _ref.selectedDates,
      onSelect = _ref.onSelect,
      onCancel = _ref.onCancel,
      onOk = _ref.onOk,
      readOnly = _ref.readOnly,
      onRemoveAtIndex = _ref.onRemoveAtIndex,
      cancelButtonText = _ref.cancelButtonText,
      submitButtonText = _ref.submitButtonText,
      selectedDatesTitle = _ref.selectedDatesTitle;
  var calendar = (0, _react.useRef)(null);
  var classes = useStyles();

  var _useState = (0, _react.useState)(function () {
    return _dateUtils.defaultUtils.getFirstDayOfMonth(initialDate || new Date());
  }),
      _useState2 = _slicedToArray(_useState, 2),
      displayDate = _useState2[0],
      setDisplayDate = _useState2[1];

  var handleMonthChange = (0, _react.useCallback)(function (months) {
    setDisplayDate(function (displayDate) {
      return _dateUtils.defaultUtils.addMonths(displayDate, months);
    });
  }, [setDisplayDate]);
  (0, _react.useEffect)(function () {
    setDisplayDate(_dateUtils.defaultUtils.getFirstDayOfMonth(initialDate || new Date()));
  }, [initialDate]);
  maxDate = maxDate || _dateUtils.defaultUtils.addYears(new Date(), 100);
  minDate = minDate || _dateUtils.defaultUtils.addYears(new Date(), -100);
  var toolbarInteractions = {
    prevMonth: _dateUtils.defaultUtils.monthDiff(displayDate, minDate) > 0,
    nextMonth: _dateUtils.defaultUtils.monthDiff(displayDate, maxDate) < 0
  };
  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement("div", {
    className: classes.selectorContainer
  }, _react["default"].createElement("div", {
    className: classes.calendarContainer
  }, _react["default"].createElement(_CalendarToolbar["default"], {
    displayDate: displayDate,
    onMonthChange: handleMonthChange,
    prevMonth: toolbarInteractions.prevMonth,
    nextMonth: toolbarInteractions.nextMonth
  }), _react["default"].createElement(_WeekHeader["default"], null), _react["default"].createElement(_Month["default"], {
    displayDate: displayDate,
    key: displayDate.toDateString(),
    selectedDates: selectedDates,
    minDate: minDate,
    maxDate: maxDate,
    onSelect: onSelect,
    readOnly: readOnly,
    ref: calendar
  })), _react["default"].createElement(_CalendarButtons["default"], {
    readOnly: readOnly,
    onCancel: onCancel,
    onOk: onOk,
    cancelButtonText: cancelButtonText,
    submitButtonText: submitButtonText
  })));
};

var _default = Calendar;
exports["default"] = _default;