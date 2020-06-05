import {User} from "discord.js";
import PlayerRepository from "../repositories/player";
import {IPlayer} from "../interfaces/player";

export default class PlayerManager {
    static checkIfPlayerExist(user: User, createPlayerIfDontExist?: boolean): boolean {
        let playerFinded = PlayerRepository.get(user.id);

        if (playerFinded && playerFinded.id == user.id) {
            return true;
        } else {
            if (createPlayerIfDontExist) {
                PlayerManager.createPlayer(user)
            }

            return false;
        }
    }

    static createPlayer(user: User) {
        PlayerRepository.create(user.id);
    }

    static getPlayer(user: User): IPlayer {
       return PlayerRepository.get(user.id);
    }
}
