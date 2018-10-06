import Discord from 'discord.js';

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
export class Watson {
    private _discord: Discord.Client;
    private _prefix?: string;


    /**
     *Creates an instance of Watson.
     * @param {IWatsonOpts} [options] Options object used to configure this instance.
     * @memberof Watson
     */
    constructor(options?: IWatsonOpts) {
        this._discord = new Discord.Client();

        if (options) {
            this._prefix = options.prefix;
        } else {
            this._prefix = "w!";
        }

        // Event handlers
        this._discord.on("ready", this.onReady);
        this._discord.on("message", this.onMessage.bind(this));
    }


    /**
     * Asks Watson to log into Discord.
     *
     * @param {string} token Bot's secret token
     * @memberof Watson
     */
    public login(token: string) {
        this._discord.login(token);
    }

    /**
     * Sets Watson's command prefix.
     *
     * @param {string} prefix Command prefix
     * @memberof Watson
     */
    public set_prefix(prefix: string) {
        this._prefix = prefix;
    }

    private onReady() {
        console.log("Watson is ready!");
    }

    private onMessage(message: Discord.Message) {
        if (message.author.bot) return;

        const command = message.content;
        if (!command.startsWith(this._prefix)) return;

        if (command === "w!speak") {
            message.channel.send("Woof!");
            return;
        }

        if (command === "w!ping") {
            const latency = Date.now() - message.createdTimestamp;
            message.channel.send(`Pong! (${latency}ms)`);
            return;
        }
    }
}