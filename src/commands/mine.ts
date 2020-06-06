import CommandModel from "./model";
import * as Discord from "discord.js";
import PlayerManager from "../managers/player";
import {IPlayer} from "../interfaces/player";
import PlayerRepository from "../repositories/player";
import MineManager from "../managers/mine";

export default class MineCommand extends CommandModel {
    mining_time: number = 5; // in seconds
    current_mining_time: number = 1;

    constructor() {
        super('mine', 'Harvest resources');
    }

    exec(msg: Discord.Message) {
        PlayerManager.checkIfPlayerExist(msg.author, true);
        let player: IPlayer = PlayerManager.getPlayer(msg.author);

        if (!player.is_mining) {
            PlayerRepository.update(player.id, {...player, actions: { is_mining: true } });

            // PlayerRepository.update(player.id, {...player, money: player.money + 10});

            let objects: any = MineManager.getChance();
            let text = '\n';

            if (objects.length > 0) {
                objects.map((o: any) => {
                    text += `**${o.name}** ${o.icon} dropped x${o.quantity}\n`;
                });

                msg.reply(text).then(() => {
                    PlayerRepository.update(player.id, {...player, actions: { is_mining: false }});
                });
            } else {
                msg.reply('You didn\'t drop anything.');
            }

            // let timer = setInterval(() => {
            //     if (this.current_mining_time < this.mining_time) {
            //         PlayerRepository.update(player.id, {...player, money: player.money + 10});
            //
            //         let objects: any = MineManager.getChance();
            //         let text = '\n';
            //
            //         if (objects.length > 0) {
            //             objects.map((o: any) => {
            //                 text += `**${o.name}** ${o.icon} dropped x${o.quantity}\n`;
            //             });
            //
            //             msg.reply(text);
            //         }
            //     } else {
            //         clearInterval(timer);
            //         this.current_mining_time = 0;
            //         PlayerRepository.update(player.id, {...player, actions: { is_mining: false }});
            //     }
            //
            //     this.current_mining_time++;
            // }, 1000);
        }
    }
}
