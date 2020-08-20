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
    }
    public async login(token: string) {
        return token;
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