import YouTube from "simple-youtube-api";

class Thrush {
    _youtube: YouTube;

    constructor(apikey: string) {
        this._youtube = new YouTube(apikey);
    }
}

export default Thrush;