import * as yaml from 'js-yaml';
import * as fs from 'fs';
import { IConfig } from "../interfaces/config";

export default class ConfigLoader {
    static load(filename: string) : IConfig {
        return yaml.safeLoad(fs.readFileSync(filename, 'utf8'));
    }
}
