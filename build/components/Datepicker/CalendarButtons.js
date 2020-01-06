"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CalendarActionButton = function CalendarActionButton(_ref) {
  var cancelButtonText = _ref.cancelButtonText,
      submitButtonText = _ref.submitButtonText,
      onCancel = _ref.onCancel,
      onOk = _ref.onOk,
      readOnly = _ref.readOnly;
  return _react["default"].createElement(_core.DialogActions, {
    style: {
      marginRight: '2em',
      marginTop: '2em'
    }
  }, _react["default"].createElement(_core.Button, {
    variant: "contained",
    size: "small",
    onClick: onCancel
  }, cancelButtonText), !readOnly && _react["default"].createElement(_core.Button, {
    variant: "contained",
    size: "small",
    color: "primary",
    onClick: onOk
  }, submitButtonText));
};

var _default = CalendarActionButton;
exports["default"] = _default;