import CommandModel from "./model";
import * as Discord from "discord.js";

export default class HelpCommand extends CommandModel {
    constructor() {
        super('help');
    }

    exec(msg: Discord.Message) {
        let textHelp = 'commands list:';
        textHelp += '```';
        textHelp += '!help - commands list\n';
        textHelp += '!mine - harvest resources\n';
        textHelp += '!ressources - ressources list\n';
        textHelp += '!money - display money';
        textHelp += '```';
        
        msg.reply(textHelp);
        msg.delete();
    }
}
