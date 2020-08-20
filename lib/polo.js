"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.version = "1.0.0";
//#region Classes
class PoloClient extends discord_js_1.Client {
    constructor(options) {
        super(options);
    }
    async login(token) {
        return token;
    }
}
exports.PoloClient = PoloClient;
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
class PoloGuild extends discord_js_1.Guild {
}
exports.PoloGuild = PoloGuild;
class PoloUser extends discord_js_1.User {
}
exports.PoloUser = PoloUser;
