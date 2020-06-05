import { Message } from "discord.js";
import CommandModel from "./model";
import PlayerManager from "../managers/player";

export default class RessourceCommand extends CommandModel {
    constructor() {
        super('ressources');
    }

    exec(msg: Message) {
        let player_data = PlayerManager.checkIfPlayerExist(msg.author);

        let textHelp = '';
        textHelp += '**money** ' + player_data.money + '\n';
        textHelp += '**wood** '+ player_data.wood +'\n';
        textHelp += '**stone** '+ player_data.stone +'\n';
        textHelp += '**gold nugget** '+ player_data.gold_nugget +'\n';

        msg.channel.send(textHelp);
    }
}
