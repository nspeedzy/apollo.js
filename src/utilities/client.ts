import { Client, ClientOptions } from "discord.js";
import { PoloOptions } from "../core/options";
//
export interface PoloClientOptions extends ClientOptions {
    prefix?: string | string[];
    prefixCaseInsensitive?: boolean;
    onready(client: PoloClient): string;
    owners?: string | string[];
    polodefaults?: PoloOptions;
    typing?: boolean;
    language?: string;
    disableAllDefaults?: boolean;
}
//
export class PoloClient extends Client {
    public constructor(options: PoloClientOptions) {
        super(options);
        this.once<"ready">("ready", () => {
            console.log(options.onready(this));
        });
    }
    public login(token?: string): Promise<string> {
        return super.login(token);
    }
}