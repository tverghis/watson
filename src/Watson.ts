import Discord from "discord.js";

import Thrush from "./modules/Thrush";

/**
 * Represents the structure of the configuration object that Watson expects.
 *
 * @export
 * @interface IWatsonConfig
 */
export interface IWatsonConfig {
    /**
     * Discord configuration fields.
     *
     * @type {Object}
     */
    Discord: {
        /**
         * Discord Bot token
         *
         * @type {string}
         */
        token: string;
    }
    
    /**
     * YouTube configuration fields.
     *
     * @type {Object}
     */
    YouTube?: {
        /**
         * YouTube Data API v3 key
         *
         * @type {string}
         */
        apikey: string;
    }
}

/**
 * Represents the structure of the options object that can be used when initializing a Watson instance.
 *
 * @export
 * @interface IWatsonOpts
 */
export interface IWatsonOpts {
    /**
     * Command prefix
     *
     * @type {string}
     * @memberof IWatsonOpts
     */
    prefix?: string;
}

/**
 * Wrapper class around the Discord client.
 * All interaction with Discord should be done through an instance of Watson.
 *
 * @export
 * @class Watson
 */
export default class Watson {
    private _config: IWatsonConfig;
    private _discord: Discord.Client;
    private _prefix?: string;
    private _thrush: Thrush;

    /**
     * Creates an instance of Watson.
     *
     * @param {IWatsonOpts} [options] Options object used to configure this instance.
     */
    constructor(config: IWatsonConfig, options?: IWatsonOpts) {
        this._config = config;
        this._discord = new Discord.Client();

        this.initializeThrush();

        if (options) {
            this._prefix = options.prefix;
        } else {
            this._prefix = "!";
        }

        // Event handlers
        this._discord.on("ready", this.onReady);
        this._discord.on("message", this.onMessage.bind(this));
    }

    /**
     * Asks Watson to log into Discord.
     *
     * @param {string} [token] Bot's secret token
     */
    public login(token?: string) {
        this._discord.login(token || this._config.Discord.token);
    }

    /**
     * Sets Watson's command prefix.
     *
     * @param {string} prefix Command prefix
     */
    public set_prefix(prefix: string) {
        this._prefix = prefix;
    }

    private initializeThrush() {
        if (this._config.YouTube && this._config.YouTube.apikey) {
            this._thrush = new Thrush(this._config.YouTube.apikey);
            console.log("Initialized Thrush.");
        } else {
            console.log("No YouTube API key provided. Thrush could not be initialized.");
        }
    }

    private onReady() {
        console.log("Watson is ready!");
    }

    private async onMessage(message: Discord.Message) {
        if (message.author.bot) return;

        const command = message.content;
        if (!command.startsWith(this._prefix)) return;

        // TODO: Create helper function to split message into command and params

        if (command === "!speak") {
            message.channel.send("Woof!");
            return;
        }

        if (command === "!ping") {
            const m = (await message.channel.send("Pong!") as Discord.Message);
            m.edit(`Pong! (${m.createdTimestamp - message.createdTimestamp}ms)`);
            return;
        }
    }
}