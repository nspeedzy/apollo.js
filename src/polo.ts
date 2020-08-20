/**
 * Provides useful functions related to
 * arithmetic maths
 */
export namespace arithmetic {
    /**
     * Adds two numbers together and returns the 
     * sum of the two numbers
     * @param {number} a The first number 
     * @param {number} b The second number
     * @returns {number} The sum of the two numbers specified
     */
    export function add(a: number, b: number): number {
        return a + b;
    }
    /**
     * Subtracts two numbers together and returns 
     * the difference between them
     * @param {number} a The first number 
     * @param {number} b The second number
     * @returns {number} The sum of the two numbers specified
     */
    export function subtract(a: number, b: number): number {
        return a - b;
    }
    /**
     * Multiplies two numbers together and returns 
     * the result
     * @param {number} a The first number 
     * @param {number} b The second number
     * @returns {number} The result from the two numbers specified
     */
    export function multiply(a: number, b: number): number {
        return a * b;
    }
    /**
     * Divides two numbers together and returns 
     * the difference between them
     * @param {number} a The first number 
     * @param {number} b The second number
     * @returns {number} The result from the two numbers specified
     */
    export function divide(a: number, b: number): number {
        return a / b;
    }
}
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
export const version: string = "1.0.0";