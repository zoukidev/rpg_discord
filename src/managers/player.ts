import {User} from "discord.js";
import PlayerRepository from "../repositories/player";

export default class PlayerManager {
    static checkIfPlayerExist(user: User): any {
        if (PlayerRepository.get(user.id).length == 0) {
            PlayerRepository.create(user.id);
        }

        return PlayerRepository.get(user.id)[0];
    }
}
