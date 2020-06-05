import {Message} from "discord.js";
import CommandModel from "./model";
import PlayerManager from "../managers/player";
import {IPlayer} from "../interfaces/player";

export default class RessourceCommand extends CommandModel {
    constructor() {
        super('ressources', 'Shows all resources in your inventory');
    }

    exec(msg: Message) {
        PlayerManager.checkIfPlayerExist(msg.author, true);

        let player: IPlayer = PlayerManager.getPlayer(msg.author);
        let textHelp = '';
        textHelp += '**wood** '+ player.wood +'\n';
        textHelp += '**stone** '+ player.stone +'\n';
        textHelp += '**gold nugget** '+ player.gold_nugget +'\n';

        msg.channel.send(textHelp);
    }
}
