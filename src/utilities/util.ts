import fs = require("fs");
import path = require("path");
import { Collection } from "discord.js";
import { PoloClient } from "./client";
import { PoloError } from "../core/error";
//
export interface ClassConstructor {
    new(...params: any[]): any;
}
//
export class Util {
    public client: PoloClient;
    public handler: Collection<any, unknown>;
    //
    public constructor(client: PoloClient) {
        this.client = client;
        this.handler = new Collection();
    }
    //
    public isClass(input: ClassConstructor): boolean {
        return typeof input === "function" &&
        typeof input.prototype === 'object' &&
        input.toString().substring(0, 5) === 'class';
    }
    //
    public async loadCommands(dir: string = './commands'): Promise<void> {
        const files = fs.readdirSync(dir).filter(file => file.endsWith(".js"));
        //
        for (const file of files) {
            var Command = await import(`${dir}/${file}`);
            //
            if (!this.isClass(Command)) {
                throw new PoloError("type_err", "Command file isn't a class");
            } else {
                var cmd = new Command(this.client);
                //
                this.handler.set
            }
        }
    }
}