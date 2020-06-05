import Database from "./database";

export default class GameRepository {
    static update(key: string, value: string) {
        Database.db.set(key, value)
            .write()
    }

    static get(key: string): any {
        return Database.db.get(key)
            .value()
    }
}
