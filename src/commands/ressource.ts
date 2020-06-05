import {Message} from "discord.js";
import CommandModel from "./model";
import PlayerManager from "../managers/player";
import {IPlayer, IPlayerGameObject} from "../interfaces/player";
import GameObject from "../object";
import {IGameObject} from "../interfaces/gameobject";

export default class RessourceCommand extends CommandModel {
    constructor() {
        super('ressources', 'Shows all resources in your inventory');
    }

    exec(msg: Message) {
        PlayerManager.checkIfPlayerExist(msg.author, true);

        let player: IPlayer = PlayerManager.getPlayer(msg.author);
        let textHelp = '\n';

        player.objects.map((o: IPlayerGameObject) => {
            let gameobject: IGameObject = GameObject.findById(o.id)

            textHelp += `**${gameobject.name||'Undefined'}**: ${o.quantity} ${gameobject.icon}\n`;
        });

        msg.reply(textHelp);
    }
}
