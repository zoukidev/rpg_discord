import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

export default class Database {
    static adapter: any;
    static db: any;

    static init() {
        Database.adapter = new FileSync('db.json');
        Database.db = low(Database.adapter);

        Database.db.defaults({ 
            players: [],
            channel: '',
            role: ''
        }).write();
    }
}