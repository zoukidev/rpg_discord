import {Message} from "discord.js";
import CommandModel from "./model";
import PlayerManager from "../managers/player";
import {IPlayer} from "../interfaces/player";

export default class MoneyCommand extends CommandModel {
    constructor() {
        super('money', 'Show money you own');
    }

    exec(msg: Message) {
        PlayerManager.checkIfPlayerExist(msg.author, true);

        let player: IPlayer = PlayerManager.getPlayer(msg.author);
        let text = '**money** ' + player.money;

        msg.channel.send(text);
    }
}
