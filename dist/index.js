"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var debounce = require('lodash/debounce');
// because the useId hook doesn't exist in react@17
// try to get the useId from 'react', if it doesn't exist, it will be undefined
var useId = require('react').useId;
/**
 * @description A button component that prevents rapid consecutive clicks by debouncing the click event.
 * This ensures that the button's action is triggered only once within a specified time frame,
 * enhancing user experience and preventing unintended repeated actions.
 *
 * Additionally, this component tries to use the `useId` hook from React for generating unique IDs.
 * If the hook doesn't exist (e.g., in react@17), it falls back to a custom ID generation method.
 *
 * @author zqsun
 * @version 1.0
 * @param {object} props - Component properties
 * @param {React.ReactNode} [props.children] - Button content
 * @param {number} [props.debounceTime=300] - Debounce time in milliseconds. Default is 300ms.
 * @returns {JSX.Element} - DebounceClickButton component
 */
function useFallbackId() {
    var idRef = (0, react_1.useRef)('');
    (0, react_1.useEffect)(function () {
        if (idRef.current === '') {
            idRef.current = Math.random().toString(36).slice(2, 11);
        }
    }, []);
    return idRef.current;
}
var DebounceClickButton = function (_a) {
    var children = _a.children, onClick = _a.onClick, _b = _a.debounceTime, debounceTime = _b === void 0 ? 300 : _b, props = __rest(_a, ["children", "onClick", "debounceTime"]);
    var id = useId ? useId() : useFallbackId();
    var debouncedOnClick = (0, react_1.useCallback)(debounce(function (event) {
        if (onClick) {
            onClick(event);
        }
    }, debounceTime), [onClick, debounceTime]);
    return ((0, jsx_runtime_1.jsx)("button", __assign({ id: 'react-debounce-button-' + id, onClick: debouncedOnClick }, props, { children: children })));
};
exports.default = DebounceClickButton;
