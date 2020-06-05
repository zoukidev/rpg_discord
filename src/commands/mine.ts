import CommandModel from "./model";
import * as Discord from "discord.js";
import PlayerManager from "../managers/player";
import {IPlayer} from "../interfaces/player";
import PlayerRepository from "../repositories/player";

export default class MineCommand extends CommandModel {
    mining_time: number = 30;
    current_mining_time: number = 0;

    constructor() {
        super('mine', 'Harvest resources');
    }

    exec(msg: Discord.Message) {
        PlayerManager.checkIfPlayerExist(msg.author, true);
        let player: IPlayer = PlayerManager.getPlayer(msg.author);

        if (!player.is_mining) {
            // PlayerRepository.update(player.id, {...player, is_mining: true});
            msg.reply('mining starting');

            let timer = setInterval(() => {
                if (this.current_mining_time < this.mining_time) {
                    PlayerRepository.update(player.id, {...player, money: player.money + 10});
                    msg.reply('tu vient de gagner 10$');
                } else {
                    msg.reply('vous avez gagnez ' + player.money + '$');
                    clearInterval(timer);
                    this.current_mining_time = 0;
                }

                this.current_mining_time++;
            }, 3000);
        }
    }
}
