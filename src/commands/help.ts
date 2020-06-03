import CommandModel from "./model";
import * as Discord from "discord.js";

export default class HelpCommand extends CommandModel {
    constructor() {
        super('help');
    }

    exec(msg: Discord.Message) {
        msg.reply(`${this.name} executed!`);
        msg.delete();
    }
}
