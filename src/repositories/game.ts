import Database from "./database";

export default class GameRepository {
    /**
     *
     * @param key
     * @param value
     */
    static update(key: string, value: string) {
        Database.db.set(key, value)
            .write()
    }

    /**
     *
     * @param key
     * @return any
     */
    static get(key: string): any {
        return Database.db.get(key)
            .value()
    }
}
