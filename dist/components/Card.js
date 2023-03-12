"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Card = props => {
  return /*#__PURE__*/_react.default.createElement("card", {
    className: "cardWrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "cardImage",
    src: "https://images.unsplash.com/photo-1678640078326-cee06e1024d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    alt: "text"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "cardContent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "cardHeadline"
  }, props.headline), /*#__PURE__*/_react.default.createElement("div", {
    className: "cardText"
  }, props.text), /*#__PURE__*/_react.default.createElement("div", {
    className: "cardButton"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: "Weitere Informationen"
  }))));
};
var _default = Card;
exports.default = _default;