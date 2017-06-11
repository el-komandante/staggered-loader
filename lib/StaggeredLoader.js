var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n'], ['\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    0% {\n        opacity: 0;\n    }\n    25% {\n        opacity: 1;\n    }\n    75% {\n        opacity: 0;\n    }\n'], ['\n    0% {\n        opacity: 0;\n    }\n    25% {\n        opacity: 1;\n    }\n    75% {\n        opacity: 0;\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    0% {\n        transform: translateX(0px);\n    }\n    25% {\n        transform: translateX(2px);\n    }\n    100% {\n        transform: translateX(0px);\n    }\n'], ['\n    0% {\n        transform: translateX(0px);\n    }\n    25% {\n        transform: translateX(2px);\n    }\n    100% {\n        transform: translateX(0px);\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    0% {\n        transform: translateX(0px);\n    }\n    25% {\n        transform: translateX(-2px);\n    }\n    100% {\n        transform: translateX(0px);\n    }\n'], ['\n    0% {\n        transform: translateX(0px);\n    }\n    25% {\n        transform: translateX(-2px);\n    }\n    100% {\n        transform: translateX(0px);\n    }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    0% {\n        transform: rotateZ(0deg)\n    }\n    50% {\n        transform: rotateZ(360deg);\n    }\n    100% {\n        transform: rotateZ(0deg);\n    }\n'], ['\n    0% {\n        transform: rotateZ(0deg)\n    }\n    50% {\n        transform: rotateZ(360deg);\n    }\n    100% {\n        transform: rotateZ(0deg);\n    }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    opacity: 0;\n    width: ', '%;\n    height: 5px;\n    background: ', ';\n    margin: 0px 4px;\n    box-shadow: 0px 0px 40px 2px ', ';\n    animation: ', ' 1s ease infinite;\n        ', '\n    animation-delay: ', 'ms;\n'], ['\n    opacity: 0;\n    width: ', '%;\n    height: 5px;\n    background: ', ';\n    margin: 0px 4px;\n    box-shadow: 0px 0px 40px 2px ', ';\n    animation: ', ' 1s ease infinite;\n        ', '\n    animation-delay: ', 'ms;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    ', '\n    ', '\n'], ['\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    ', '\n    ', '\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import './App.css';
import styled, { keyframes } from 'styled-components';
import { opacify } from 'polished';
import _ from 'lodash';

var Container = styled.div(_templateObject);
var Pulse = keyframes(_templateObject2);
var SlideLeft = keyframes(_templateObject3);
var SlideRight = keyframes(_templateObject4);
var Rotate360 = keyframes(_templateObject5);
var Bar = styled.div(_templateObject6, function (props) {
    return 1 / props.numBars * 100;
}, function (props) {
    return props.color ? props.color : 'red';
}, function (props) {
    return props.color ? opacify(-.3, props.color) : opacify(-.3, 'red');
}, Pulse, '' /* ${ props => props.left ? SlideLeft : SlideRight } 1s ease infinite; */, function (props) {
    return props.index * 100;
});
var BarContainer = styled.div(_templateObject7, '' /* animation: ${ Rotate360 } 2s ease infinite; */, '' /* animation-delay: ${ props => (props.numBars / 2) * 100 } */);

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.renderBars = function () {
            var _this$props = _this.props,
                numBars = _this$props.numBars,
                color = _this$props.color;

            var leftBars = _.range(numBars / 2).map(function (num) {
                return React.createElement(Bar, { color: color, numBars: numBars, left: true, index: num, key: 'left' + num });
            });
            var rightBars = _.range(numBars / 2).map(function (num) {
                return React.createElement(Bar, { color: color, numBars: numBars, index: numBars / 2 - 1 - num, key: 'right' + num });
            });
            return React.createElement(
                BarContainer,
                { numBars: numBars },
                leftBars,
                rightBars
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                Container,
                null,
                this.renderBars()
            );
        }
    }]);

    return App;
}(Component);

export default App;