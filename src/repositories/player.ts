import Database from "./database";
import {IPlayer} from "../interfaces/player";
import GameObject from "../object";

export default class PlayerRepository {
    /**
     *
     * @param id
     */
    static create(id: string) {
        Database.db.get('players')
            .push({
                id: id,
                money: 0,
                actions: {
                    is_mining: false
                },
                objects: [
                    ...GameObject.initPlayerGameObject()
                ]
            })
            .write();
    }

    /**
     *
     * @param id
     * @return IPlayer
     */
    static get(id: string): IPlayer {
        return Database.db.get('players')
            .find({ id: id })
            .value();
    }

    /**
     *
     * @param id
     * @param data
     */
    static update(id: string, data: IPlayer) {
        Database.db.get('players')
            .find({ id: id })
            .assign(data)
            .write();
    }
}
