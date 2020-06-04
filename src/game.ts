import Logger from './utils/logger';
import DiscordBot from "./discord/bot";
import ConfigLoader from "./utils/configloader";
import Database from './repositories/database';
import { IConfig } from "./interfaces/config";
// Managers
import CommandManager from "./managers/command";
// Commands
import HelpCommand from "./commands/help";
import MineCommand from './commands/mine';
import SetChannelCommand from "./commands/setchannel";
import TestCommand from "./commands/test";

export class Game {
    static config: IConfig;
    static logger: Logger;

    static printInformations() {
        Game.logger.info('==== Start build ====');
        Game.logger.info(`Money: ${Game.config.default.ressources.money}`);
        Game.logger.info(`Wood: ${Game.config.default.ressources.wood}`);
        Game.logger.info(`Stone: ${Game.config.default.ressources.stone}`);
        Game.logger.info(`Gold Nuggets: ${Game.config.default.ressources.gold_nugget}`);
        Game.logger.info('=====================');
    }

    static loadConfig() {
        Game.config = ConfigLoader.load('config.yml');
        Game.logger.info('config.yml loaded');
    }

    static loadCommand() {
        CommandManager.register(new SetChannelCommand());
        CommandManager.register(new HelpCommand());
        CommandManager.register(new MineCommand());
        CommandManager.register(new TestCommand());
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

        // printInformations
        Game.printInformations();
    }
}

(() => {
    Game.launch();
})();
