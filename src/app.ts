import { Watson } from './Watson';
import Config from './botconfig.json';

const watson = new Watson();
watson.login(Config.token);