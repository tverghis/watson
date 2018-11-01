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