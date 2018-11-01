declare module "simple-youtube-api" {

    /**
     * The YouTube API module.
     *
     * @class YouTube
     */
    class YouTube {

        /**
         * Creates an instance of the YouTube API module.
         * 
         * @param {string} key The YouTube Data API v3 key to use.
         */
        constructor(key: string);

        /**
         * Search YouTube for videos.
         *
         * @param {string} query The string to search for.
         * @param {number} [limit] Maximum results to obtain. Default: 5.
         * @param {Object} [options] Additional options to pass to the API request. Default: {}.
         * @returns {Promise<Video[]>} Array of Videos, wrapped in a Promise.
         */
        searchVideos(query: string, limit?: number, options?: Object): Promise<Video[]>;
    }

    /**
     * Represents a YouTube video.
     *
     * @class Video
     */
    class Video {

        /**
         * This video's title.
         *
         * @type {string}
         */
        title: string

        /**
         * This video's description.
         *
         * @type {string}
         */
        description: string;

        /**
         * The URL to this video.
         *
         * @type {string}
         */
        url: string;

        /**
         * The duration of the video in seconds.
         *
         * @type {number}
         */
        durationSeconds: number;
    }

    export = YouTube;
}