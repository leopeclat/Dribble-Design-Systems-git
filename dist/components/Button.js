"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "dribbble-button",
    style: {
      backgroundColor: '#EC0016',
      color: 'white',
      fontFamily: 'Verdana',
      fontSize: '16px',
      border: 'none',
      padding: '19px 18px 18px',
      borderRadius: '4px'
    }
  }, props.label);
};
var _default = Button;
exports.default = _default;