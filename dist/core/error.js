"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PoloError extends Error {
    constructor(type, msg) {
        super(msg);
        this.name = type;
    }
    throw() {
        console.error(this.message);
    }
}
exports.PoloError = PoloError;
