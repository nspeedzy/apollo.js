export namespace logical {
    export function add(a: number, b: number): number {
        return a + b;
    }
    export function subtract(a: number, b: number): number {
        return a - b;
    }
    export function multiply(a: number, b: number): number {
        return a * b;
    }
    export function divide(a: number, b: number): number {
        return a / b;
    }
}
export class AssertiveError {}
export const version: string = "1.0.0";