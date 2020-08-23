"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
//
class PoloClient extends discord_js_1.Client {
    constructor(options) {
        super(options);
        this.once("ready", () => {
            console.log(options.onready(this));
        });
    }
    login(token) {
        return super.login(token);
    }
}
exports.PoloClient = PoloClient;
