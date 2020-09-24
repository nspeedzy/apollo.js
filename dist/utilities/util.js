"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
class Util {
    //
    constructor(client) {
        this.client = client;
    }
    //
    isClass(input) {
        return typeof input === "function" &&
            typeof input.prototype === 'object' &&
            input.toString().substring(0, 5) === 'class';
    }
    //
    get directory() {
        return `${__dirname}`;
    }
}
exports.Util = Util;
