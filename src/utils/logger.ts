import * as colors from 'colors/safe';

export default class Logger {
    name: string;

    /**
     *
     * @param name
     */
    constructor(name: string) {
        this.name = name;
    }

    /**
     *
     * @param msg
     */
    log(msg: string) {
        console.log(colors.white(`[${this.name}] ${msg}`));
    }

    /**
     *
     * @param msg
     */
    info(msg: string) {
        console.log(colors.blue(`[${this.name}] ${msg}`));
    }

    /**
     *
     * @param msg
     */
    warning(msg: string) {
        console.log(colors.yellow(`[${this.name}] ${msg}`));
    }

    /**
     *
     * @param msg
     */
    error(msg: string) {
        console.log(colors.red(`[${this.name}] ${msg}`));
    }
}
