import Database from "./database";

export default class GameRepository {
    static update(key: string, value: string) {
        Database.db.set(key, value)
            .write()
    }
}
