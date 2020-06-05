import CommandModel from "./model";
import * as Discord from "discord.js";

export default class MineCommand extends CommandModel {
    constructor() {
        super('mine', 'Harvest resources');
    }

    exec(msg: Discord.Message) {
        msg.reply('tu n\a pas l\'age pour dire ça');
        msg.delete();
    }
}
