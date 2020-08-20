"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.version = "1.0.0";
//#region Classes
class PoloClient extends discord_js_1.Client {
    constructor(options) {
        super(options);
        this.once("ready", () => {
            try {
                if (typeof options.onready === "undefined") {
                    console.log("");
                }
                else {
                    if (typeof options.onready === "function") {
                        options.onready(this);
                    }
                    else {
                        console.log(options.onready);
                    }
                }
            }
            catch (e) {
                console.log("An error occured. But it's not your fault");
            }
        });
    }
    login(token) {
        return super.login(token);
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
var permissions;
(function (permissions) {
    let GeneralPerms;
    (function (GeneralPerms) {
        GeneralPerms[GeneralPerms["ADMINISTRATOR"] = 8] = "ADMINISTRATOR";
        GeneralPerms[GeneralPerms["VIEW_AUDIT_LOGS"] = 128] = "VIEW_AUDIT_LOGS";
        GeneralPerms[GeneralPerms["VIEW_SERVER_INSIGHTS"] = 524288] = "VIEW_SERVER_INSIGHTS";
        GeneralPerms[GeneralPerms["MANAGE_SERVER"] = 32] = "MANAGE_SERVER";
        GeneralPerms[GeneralPerms["MANAGE_ROLES"] = 268435456] = "MANAGE_ROLES";
        GeneralPerms[GeneralPerms["MANAGE_CHANNELS"] = 16] = "MANAGE_CHANNELS";
        GeneralPerms[GeneralPerms["KICK_MEMBERS"] = 2] = "KICK_MEMBERS";
        GeneralPerms[GeneralPerms["BAN_MEMBERS"] = 4] = "BAN_MEMBERS";
        GeneralPerms[GeneralPerms["CREATE_INSTANT_INVITE"] = 1] = "CREATE_INSTANT_INVITE";
        GeneralPerms[GeneralPerms["CHANGE_NICKNAME"] = 67108864] = "CHANGE_NICKNAME";
        GeneralPerms[GeneralPerms["MANAGE_NICKNAMES"] = 134217728] = "MANAGE_NICKNAMES";
        GeneralPerms[GeneralPerms["MANAGE_EMOJIS"] = 1073741824] = "MANAGE_EMOJIS";
        GeneralPerms[GeneralPerms["MANAGE_WEBHOOKS"] = 536870912] = "MANAGE_WEBHOOKS";
        GeneralPerms[GeneralPerms["VIEW_CHANNELS"] = 1024] = "VIEW_CHANNELS";
    })(GeneralPerms = permissions.GeneralPerms || (permissions.GeneralPerms = {}));
    let TextPerms;
    (function (TextPerms) {
        TextPerms[TextPerms["SEND_MESSAGES"] = 2048] = "SEND_MESSAGES";
        TextPerms[TextPerms["SEND_TTS_MESSAGES"] = 4096] = "SEND_TTS_MESSAGES";
        TextPerms[TextPerms["MANAGE_MESSAGES"] = 8192] = "MANAGE_MESSAGES";
        TextPerms[TextPerms["EMBED_LINKS"] = 16384] = "EMBED_LINKS";
        TextPerms[TextPerms["ATTACH_FILES"] = 32768] = "ATTACH_FILES";
        TextPerms[TextPerms["READ_MESSAGE_HISTORY"] = 65536] = "READ_MESSAGE_HISTORY";
        TextPerms[TextPerms["MENTION_EVERYONE"] = 131072] = "MENTION_EVERYONE";
        TextPerms[TextPerms["USE_EXTERNAL_EMOJIS"] = 262144] = "USE_EXTERNAL_EMOJIS";
        TextPerms[TextPerms["ADD_REACTIONS"] = 64] = "ADD_REACTIONS";
    })(TextPerms = permissions.TextPerms || (permissions.TextPerms = {}));
    let VoicePerms;
    (function (VoicePerms) {
        VoicePerms[VoicePerms["CONNECT"] = 1048576] = "CONNECT";
        VoicePerms[VoicePerms["SPEAK"] = 2097152] = "SPEAK";
        VoicePerms[VoicePerms["VIDEO"] = 512] = "VIDEO";
        VoicePerms[VoicePerms["MUTE_MEMBERS"] = 4194304] = "MUTE_MEMBERS";
        VoicePerms[VoicePerms["DEAFEN_MEMBERS"] = 8388608] = "DEAFEN_MEMBERS";
        VoicePerms[VoicePerms["MOVE_MEMBERS"] = 16777216] = "MOVE_MEMBERS";
        VoicePerms[VoicePerms["USE_VOICE_ACTIVITY"] = 33554432] = "USE_VOICE_ACTIVITY";
        VoicePerms[VoicePerms["PRIORITY_SPEAKER"] = 256] = "PRIORITY_SPEAKER";
    })(VoicePerms = permissions.VoicePerms || (permissions.VoicePerms = {}));
})(permissions = exports.permissions || (exports.permissions = {}));
