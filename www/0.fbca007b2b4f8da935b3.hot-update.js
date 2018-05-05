exports.id = 0;
exports.modules = {

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(19);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Navbar = function (_Component) {\n    _inherits(Navbar, _Component);\n\n    function Navbar() {\n        _classCallCheck(this, Navbar);\n\n        var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));\n\n        _this.state = { options: [\"friends\", \"guides\"] };\n        _this.renderNavbar = _this.renderNavbar.bind(_this);\n        return _this;\n    }\n\n    _createClass(Navbar, [{\n        key: \"renderNavbar\",\n        value: function renderNavbar() {\n            return this.state.options.map(function (curr) {\n                return _react2.default.createElement(\n                    \"li\",\n                    null,\n                    \"curr\"\n                );\n            });\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            return _react2.default.createElement(\n                \"div\",\n                null,\n                this.renderNavbar()\n            );\n        }\n    }]);\n\n    return Navbar;\n}(_react.Component);\n\nexports.default = Navbar;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL25hdmJhci5qcz84YzRmIl0sIm5hbWVzIjpbIk5hdmJhciIsInN0YXRlIiwib3B0aW9ucyIsInJlbmRlck5hdmJhciIsImJpbmQiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixzQkFBYztBQUFBOztBQUFBOztBQUdWLGNBQUtDLEtBQUwsR0FBYSxFQUFFQyxTQUFTLENBQUMsU0FBRCxFQUFZLFFBQVosQ0FBWCxFQUFiO0FBQ0EsY0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUpVO0FBS2I7Ozs7dUNBRWM7QUFDWCxtQkFBTyxLQUFLSCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJHLEdBQW5CLENBQXVCO0FBQUEsdUJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUFBLGFBQXZCLENBQVA7QUFDSDs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBRVEscUJBQUtGLFlBQUw7QUFGUixhQURKO0FBT0g7Ozs7OztrQkFHVUgsTSIsImZpbGUiOiIyMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0geyBvcHRpb25zOiBbXCJmcmllbmRzXCIsIFwiZ3VpZGVzXCJdIH1cclxuICAgICAgICB0aGlzLnJlbmRlck5hdmJhciA9IHRoaXMucmVuZGVyTmF2YmFyLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlck5hdmJhcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcHRpb25zLm1hcChjdXJyPT4gPGxpPmN1cnI8L2xpPilcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck5hdmJhcigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvbmF2YmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///237\n");

/***/ })

};