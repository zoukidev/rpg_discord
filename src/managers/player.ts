import {User} from "discord.js";
import PlayerRepository from "../repositories/player";

export default class PlayerManager {
    static checkIfPlayerExist(user: User) {
        let player_row = PlayerRepository.get(user.id)
        if (player_row.length == 0) {
            PlayerRepository.create(user.id);
        } else {
            return player_row;
        }
    }
}
