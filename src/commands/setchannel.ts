import { Message } from "discord.js";
import CommandModel from "./model";
import GameRepository from "../repositories/game";

export default class SetChannelCommand extends CommandModel {
    constructor() {
        super('setchannel');
    }

    exec(msg: Message) {
        if (msg.member?.hasPermission(3)) {
            GameRepository.update('channel', msg.channel.id);
            msg.reply('I am ready!');
        }
    }
}
