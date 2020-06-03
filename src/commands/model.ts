import * as Discord from 'discord.js';

export default class CommandModel {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    exec(msg: Discord.Message) {}
}
