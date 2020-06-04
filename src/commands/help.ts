import CommandModel from "./model";
import { Message } from "discord.js";

export default class HelpCommand extends CommandModel {
    constructor() {
        super('help');
    }

    exec(msg: Message) {
        let textHelp = '';
            textHelp += '**!help** Commands list\n';
            textHelp += '**!mine** Harvest resources\n';
            textHelp += '**!ressources** Ressources list\n';
            textHelp += '**!money** Display money';

        msg.channel.send(textHelp);
    }
}
