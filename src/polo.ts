import {
    Client, ClientOptions,
    Guild, User
} from "discord.js";
export const version: string = "1.0.0";
//#region TypeDefs
export type ReadyEvent = string | ((client: PoloClient) => string);
export interface PoloClientOptions extends ClientOptions {
    prefix?: string | string[];
    prefixCaseInsensitive?: boolean;
    onready?: ReadyEvent;
    owners?: string | string[];
    polodefaults?: PoloOptions;
    typing?: boolean;
    language?: string;
    disableAllDefaults: boolean;
}
export interface PoloOptions {}
//#region Classes
export class PoloClient extends Client {
    public constructor(options?: PoloClientOptions) {
        super(options);
        this.once("ready", () => {
            if (typeof options?.onready === "function") {
                options.onready(this);
            } else {
                console.log(options?.onready);
            }
        });
    }
    public login(token?: string): Promise<string> {
        return super.login(token);
    }
}
export class PoloError extends Error {
    constructor(type: string, msg: string) {
        super(msg);
        this.name = type;
    }
    public throw(): void {
        console.error(this.message);
    }
}
export class PoloGuild extends Guild {}
export class PoloUser extends User {}
export namespace permissions {
    export enum GeneralPerms {
        ADMINISTRATOR = 8,
        VIEW_AUDIT_LOGS = 128,
        VIEW_SERVER_INSIGHTS = 524288,
        MANAGE_SERVER = 32,
        MANAGE_ROLES = 268435456,
        MANAGE_CHANNELS = 16,
        KICK_MEMBERS = 2,
        BAN_MEMBERS = 4,
        CREATE_INSTANT_INVITE = 1,
        CHANGE_NICKNAME = 67108864,
        MANAGE_NICKNAMES = 134217728,
        MANAGE_EMOJIS = 1073741824,
        MANAGE_WEBHOOKS = 536870912,
        VIEW_CHANNELS = 1024
    }
    export enum TextPerms {
        SEND_MESSAGES = 2048,
        SEND_TTS_MESSAGES = 4096,
        MANAGE_MESSAGES = 8192,
        EMBED_LINKS = 16384,
        ATTACH_FILES = 32768,
        READ_MESSAGE_HISTORY = 65536,
        MENTION_EVERYONE = 131072,
        USE_EXTERNAL_EMOJIS = 262144,
        ADD_REACTIONS = 64
    }
    export enum VoicePerms {
        CONNECT = 1048576,
        SPEAK = 2097152,
        VIDEO = 512,
        MUTE_MEMBERS = 4194304,
        DEAFEN_MEMBERS = 8388608,
        MOVE_MEMBERS = 16777216,
        USE_VOICE_ACTIVITY = 33554432,
        PRIORITY_SPEAKER = 256
    }
}