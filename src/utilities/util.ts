import path from "path";
import { promisify } from "util";
import glob from "glob";
import { PoloClient } from "./client";
//
export interface ClassConstructor {
    new(...params: any[]): any;
}
//
export class Util {
    public client: PoloClient;
    //
    public constructor(client: PoloClient) {
        this.client = client;
    }
    //
    public isClass(input: ClassConstructor): boolean {
        return typeof input === "function" &&
        typeof input.prototype === 'object' &&
        input.toString().substring(0, 5) === 'class';
    }
    //
    get directory(): string {
        return `${__dirname}`;
    }
}