declare module "apollo" {

    import {
        Client,
        ClientOptions,
        Guild,
        User
    } from "discord.js";

    export namespace info {
        /**
         * The version of the polo.js framework
         */
        export const version: string;
        /**
         * Requirements needed for polo.js to 
         * function properly
         */
        export const requires: string[];
    }

//#region TypeDefs

    /**
     * PoloClient options
     */
    export interface PoloClientOptions extends ClientOptions {
        /**
         * The prefix(es) for the bot
         */
        prefix?: string | string[];
        /**
         * Specify whether to make the prefix case insensitive or not
         * Default is false
         */
        prefixCaseInsensitive?: boolean;
        /**
         * Executed when Client is ready
         */
        onready(client: PoloClient): string;
        /**
         * The bot owner(s). Please make sure you specify the user's tag
         */
        owners?: string | string[];
        /**
         * The general options for polo
         */
        polodefaults?: PoloOptions;
        /**
         * When set to `true`, The client will show that the bot is 
         * typing. Default is `false`.
         */
        typing?: boolean;
        /**
         * The language of the bot
         */
        language?: string;
        /**
         * Specify whether to disable all Polo defaults. Default is
         * `false`
         */
        disableAllDefaults?: boolean;
    }

    /**
     * General polo potions
     */
    export interface PoloOptions {  }

//#region Classes

    /**
     * The main polo class
     */
    export class PoloClient extends Client {
        /**
         * The `PoloClient` constructor
         * @param {PoloClientOptions} options The desired options you want for your bot
         */
        public constructor(options: PoloClientOptions);
        /**
         * Logs the client in, establishing a websocket connection to Discord.
         * @param {string} token Token of the account to log in with
         * @see https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=login
         */
        public login(token?: string): Promise<string>;
    }

    export { PoloClient as Client };

    /**
     * PoloError class for errors based on polo.js
     */
    export class PoloError extends Error {
        /**
         * The PoloError constructor
         * @param {string} type The type of the error
         * @param {string} msg The error message to be thrown
         */
        public constructor(type: string, msg: string);
        /**
         * Logs just the message into the console
         */
        public throw(): void;
    }

    /**
     * Represents a guild
     */
    export class PoloGuild extends Guild {  }

    /**
     * Represents a user
     */
    export class PoloUser extends User {  }

    /**
     * Utilities for creating commands, events and arguments
     */
    export class Util {
        /**
         * The `Util` constructor
         * @param {PoloClient} client The PoloClient instance
         */
        public constructor(client: PoloClient);
        /**
         * Checks if the user input is a class or not
         * @param input The class to be inputted
         */
        public isClass(input: any): boolean;
        /**
         * Loads all commands from the specified
         * directory asyncronously
         * @param {string} dir The directory to load all the commands from 
         */
        public loadCommands(dir: string): Promise<void>;
    }

//#region Constants

    export namespace permissions {
        /**
         * General Permissions
         */
        export enum GeneralPerms {
            ADMINISTRATOR,
            VIEW_AUDIT_LOGS,
            VIEW_SERVER_INSIGHTS,
            MANAGE_SERVER,
            MANAGE_ROLES,
            MANAGE_CHANNELS,
            KICK_MEMBERS,
            BAN_MEMBERS,
            CHANGE_NICKNAME,
            MANAGE_NICKNAMES,
            MANAGE_EMOJIS,
            MANAGE_WEBHOOKS,
            VIEW_CHANNELS
        }
        /**
         * Text permissions
         */
        export enum TextPerms {
            SEND_MESSAGES,
            SEND_TTS_MESSAGES,
            MANAGE_MESSAGES,
            EMBED_LINKS,
            ATTACH_FILES,
            READ_MESSAGE_HISTORY,
            MENTION_EVERYONE,
            USE_EXTERNAL_EMOJIS,
            ADD_REACTIONS
        }
        /**
         * Voice permissions
         */
        export enum VoicePerms {
            CONNECT,
            SPEAK,
            VIDEO,
            MUTE_MEMBERS,
            DEAFEN_MEMBERS,
            MOVE_MEMBERS,
            USE_VOICE_ACTIVITY,
            PRIORITY_SPEAKER
        }
    }
}