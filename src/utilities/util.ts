import path from "path";
import { promisify } from "util";
import fg from "fast-glob";
import { PoloClient } from "./client";
//
export class Util {
    public client: PoloClient;
    //
    public constructor(client: PoloClient) {
        this.client = client;
    }
    //
    public isClass(input: any): boolean {
        return typeof input === "function" &&
        typeof input.prototype === 'object' &&
        input.toString().substring(0, 5) === 'class'
    }
    //
    get directory(): string {
        return `Dirname`;
    }
}