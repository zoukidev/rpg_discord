import Logger from './utils/logger';
import DiscordBot from "./discord/bot";
import ConfigLoader from "./utils/configloader";
import Database from './repositories/database';
import {IConfig} from "./interfaces/config";
// Managers
import CommandManager from "./managers/command";
// Commands
import HelpCommand from "./commands/help";
import MineCommand from './commands/mine';
import SetChannelCommand from "./commands/setchannel";
// import TestCommand from "./commands/test";
import RessourceCommand from "./commands/ressource";
import MoneyCommand from "./commands/money";

export class Game {
    static config: IConfig;
    static logger: Logger;

    static loadConfig() {
        Game.config = ConfigLoader.load('config.yml');
        Game.logger.info('config.yml loaded');
    }

    static loadCommand() {
        CommandManager.register(new HelpCommand());
        CommandManager.register(new RessourceCommand());
        CommandManager.register(new MoneyCommand());
        CommandManager.register(new MineCommand());
        CommandManager.register(new SetChannelCommand());
        // CommandManager.register(new TestCommand());
    }

    static launch() {
        Game.logger = new Logger('Game');
        Game.loadConfig();

        // Init
        Database.init();
        DiscordBot.init();
        CommandManager.init();

        // Load
        Game.loadCommand();
    }
}

export class Definitions {
    static moneyName = 'Crowns';
    static icons: any = {
        money: '👑'
    }
}

(() => {
    Game.launch();
})();
