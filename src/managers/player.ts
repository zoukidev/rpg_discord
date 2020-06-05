import {User} from "discord.js";
import PlayerRepository from "../repositories/player";
import {IPlayer} from "../interfaces/player";

export default class PlayerManager {
    /**
     *
     * @param user
     * @param createPlayerIfDontExist
     * @return  boolean
     */
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

    /**
     *
     * @param user
     */
    static createPlayer(user: User) {
        PlayerRepository.create(user.id);
    }

    /**
     *
     * @param user
     * @return IPlayer
     */
    static getPlayer(user: User): IPlayer {
       return PlayerRepository.get(user.id);
    }
}
