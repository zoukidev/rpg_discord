import Database from "./database";
import {IPlayer} from "../interfaces/player";

export default class PlayerRepository {
    static create(id: string, wood: number, stone: number, gold_nugget: number, money: number) {
        Database.db.get('players')
            .push({
                id: id,
                wood: wood,
                stone: stone,
                gold_nugget: gold_nugget,
                money: money
            })
            .write();
    }

    static get(id: string): IPlayer {
        return Database.db.get('players')
            .find({ id: id })
            .value();
    }
}
