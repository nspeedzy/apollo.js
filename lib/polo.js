"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Provides useful functions related to
 * arithmetic maths
 */
var arithmetic;
(function (arithmetic) {
    /**
     * Adds two numbers together and returns the
     * sum of the two numbers
     * @param {number} a The first number
     * @param {number} b The second number
     * @returns {number} The sum of the two numbers specified
     */
    function add(a, b) {
        return a + b;
    }
    arithmetic.add = add;
    /**
     * Subtracts two numbers together and returns
     * the difference between them
     * @param {number} a The first number
     * @param {number} b The second number
     * @returns {number} The sum of the two numbers specified
     */
    function subtract(a, b) {
        return a - b;
    }
    arithmetic.subtract = subtract;
    /**
     * Multiplies two numbers together and returns
     * the result
     * @param {number} a The first number
     * @param {number} b The second number
     * @returns {number} The result from the two numbers specified
     */
    function multiply(a, b) {
        return a * b;
    }
    arithmetic.multiply = multiply;
    /**
     * Divides two numbers together and returns
     * the difference between them
     * @param {number} a The first number
     * @param {number} b The second number
     * @returns {number} The result from the two numbers specified
     */
    function divide(a, b) {
        return a / b;
    }
    arithmetic.divide = divide;
})(arithmetic = exports.arithmetic || (exports.arithmetic = {}));
//
class Logical {
    constructor() {
        //
    }
}
//
/**
 * The version of the library
 */
exports.version = "1.0.0";
