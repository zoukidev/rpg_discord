import * as Discord from 'discord.js';

export default class CommandModel {
    name: string;
    description: string;

    constructor(name: string, desc: string) {
        this.name = name;
        this.description = desc;
    }

    exec(msg: Discord.Message) {}
}
