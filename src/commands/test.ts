import { Message } from "discord.js";
import CommandModel from "./model";
import PlayerManager from "../managers/player";

export default class TestCommand extends CommandModel {
    constructor() {
        super('test', 'Test command');
    }

    exec(msg: Message) {
        let player_data = PlayerManager.checkIfPlayerExist(msg.author);
        console.log('result', player_data);

        msg.reply(`user getted`);
        // msg.reply(`${msg.author.username} ${msg.author.id}(${typeof(msg.author.id)})`);
    }
}
