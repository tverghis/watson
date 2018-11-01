import config from "./botconfig.json";
import Watson from "./modules/Watson";

const watson = new Watson(config);
watson.login();
