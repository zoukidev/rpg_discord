import CommandModel from "./model";
import * as Discord from "discord.js";
import PlayerManager from "../managers/player";
import {IPlayer} from "../interfaces/player";

export default class MineCommand extends CommandModel {
    constructor() {
        super('mine', 'Harvest resources');
    }

    exec(msg: Discord.Message) {
        PlayerManager.checkIfPlayerExist(msg.author, true);

        let player: IPlayer = PlayerManager.getPlayer(msg.author);

        msg.reply('tu n\a pas l\'age pour dire ça');
        msg.delete();
    }
}
