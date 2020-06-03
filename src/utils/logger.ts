import * as colors from 'colors/safe';

export default class Logger {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    log(msg: string) {
        console.log(colors.white(`[${this.name}] ${msg}`));
    }

    info(msg: string) {
        console.log(colors.blue(`[${this.name}] ${msg}`));
    }

    warning(msg: string) {
        console.log(colors.yellow(`[${this.name}] ${msg}`));
    }

    error(msg: string) {
        console.log(colors.red(`[${this.name}] ${msg}`));
    }
}
