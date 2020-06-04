import Database from "./database";
import { Game } from '../game';

export default class PlayerRepository {
    static create(id: string) {
        Database.db.get('players')
            .push({
                id: id,
                wood: Game.config.default.ressources.wood,
                stone: Game.config.default.ressources.stone,
                gold_nugget: Game.config.default.ressources.gold_nugget,
                money: Game.config.default.ressources.money
            })
            .write()
    }

    static get(id: string) {
        return Database.db.get('players')
            .filter({id: id})
            .take(1)
            .value()
    }
}
