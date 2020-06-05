import {Message} from "discord.js";
import CommandModel from "./model";
import PlayerManager from "../managers/player";
import {IPlayer} from "../interfaces/player";
import {Definitions} from "../game";

export default class MoneyCommand extends CommandModel {
    constructor() {
        super('money', 'Show money you own');
    }

    exec(msg: Message) {
        PlayerManager.checkIfPlayerExist(msg.author, true);
        let player: IPlayer = PlayerManager.getPlayer(msg.author);

        msg.reply(`\n**${Definitions.moneyName}** ${player.money} ${Definitions.icons.money}`);
    }
}
