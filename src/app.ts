import config from "./botconfig.json";
import Watson from "./Watson";

const watson = new Watson(config);
watson.login();
