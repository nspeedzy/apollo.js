"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logical;
(function (logical) {
    function add(a, b) {
        return a + b;
    }
    logical.add = add;
    function subtract(a, b) {
        return a - b;
    }
    logical.subtract = subtract;
    function multiply(a, b) {
        return a * b;
    }
    logical.multiply = multiply;
    function divide(a, b) {
        return a / b;
    }
    logical.divide = divide;
})(logical = exports.logical || (exports.logical = {}));
class AssertiveError {
}
exports.AssertiveError = AssertiveError;
exports.version = "1.0.0";
//# sourceMappingURL=polo.js.map