"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyComponent = void 0;
var react_1 = __importDefault(require("react"));
var MyComponent = function (_a) {
    var text = _a.text;
    return react_1.default.createElement("div", null, text);
};
exports.MyComponent = MyComponent;
