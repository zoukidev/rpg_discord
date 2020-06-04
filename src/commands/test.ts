import { Message } from "discord.js";
import CommandModel from "./model";
import PlayerManager from "../managers/player";

export default class TestCommand extends CommandModel {
    constructor() {
        super('test');
    }

    exec(msg: Message) {
        if (PlayerManager.checkIfPlayerExist(msg.author)) {
            msg.reply(`user saved`);
        }

        msg.reply(`${msg.author.username} ${msg.author.id}(${typeof(msg.author.id)})`);
    }
}
