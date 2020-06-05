import { Message } from "discord.js";
import CommandModel from "./model";
import PlayerManager from "../managers/player";

export default class MoneyCommand extends CommandModel {
    constructor() {
        super('money', 'Show money you own');
    }

    exec(msg: Message) {
        let player_data = PlayerManager.checkIfPlayerExist(msg.author);
        let textHelp = '**money** ' + player_data.money;

        msg.channel.send(textHelp);
    }
}
