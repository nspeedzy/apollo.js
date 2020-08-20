/**
 * Provides useful functions related to
 * arithmetic maths
 */
export declare namespace arithmetic {
    /**
     * Adds two numbers together and returns the
     * sum of the two numbers
     * @param {number} a The first number
     * @param {number} b The second number
     * @returns {number} The sum of the two numbers specified
     */
    function add(a: number, b: number): number;
    /**
     * Subtracts two numbers together and returns
     * the difference between them
     * @param {number} a The first number
     * @param {number} b The second number
     * @returns {number} The sum of the two numbers specified
     */
    function subtract(a: number, b: number): number;
    /**
     * Multiplies two numbers together and returns
     * the result
     * @param {number} a The first number
     * @param {number} b The second number
     * @returns {number} The result from the two numbers specified
     */
    function multiply(a: number, b: number): number;
    /**
     * Divides two numbers together and returns
     * the difference between them
     * @param {number} a The first number
     * @param {number} b The second number
     * @returns {number} The result from the two numbers specified
     */
    function divide(a: number, b: number): number;
}
/**
 * The version of the library
 */
export declare const version: string;
